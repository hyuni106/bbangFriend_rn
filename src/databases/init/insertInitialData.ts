import { executeSql } from 'databases';

export const insertInitialData = async (): Promise<void> => {
  const tags = [
    { id: 1, key: 'recipe.tags.pastry' },
    { id: 2, key: 'recipe.tags.bread' },
  ];

  for (const { id, key } of tags) {
    await executeSql(`INSERT OR IGNORE INTO RecipeTags (id, key) VALUES (?, ?)`, [id, key]);
  }
};
