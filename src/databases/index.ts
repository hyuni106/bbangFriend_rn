import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';
import { DATABASE_CONFIG } from 'configs';
import { createTables } from './init/createTables';
import { insertInitialData } from './init/insertInitialData';

let db: SQLiteDatabase;

export const initializeDatabase = async (): Promise<void> => {
  try {
    db = await SQLite.openDatabase(DATABASE_CONFIG);
    console.log('Database initialized:', db);

    await createTables();
    await insertInitialData();
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};

export const executeSql = async (query: string, params: unknown[] = []): Promise<unknown> => {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }

  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          query,
          params,
          (_, result) => resolve(result),
          (_, error) => {
            reject(error);
            return false;
          },
        );
      },
      error => reject(error),
    );
  });
};
