import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';
import { DATABASE_CONFIG } from 'configs';

let db: SQLiteDatabase;

export const initializeDatabase = async (): Promise<void> => {
  try {
    db = await SQLite.openDatabase(DATABASE_CONFIG);
    console.log('Database initialized:', db);

    // TODO: 테이블 생성 및 초기값 설정 추가 예정
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
