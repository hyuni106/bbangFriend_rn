import { executeSql } from 'databases';

export const insertInitialData = async (): Promise<void> => {
  const tags = [
    { id: 1, key: 'recipe.tags.pastry' },
    { id: 2, key: 'recipe.tags.bread' },
  ];

  for (const { id, key } of tags) {
    await executeSql(`INSERT OR IGNORE INTO RecipeTags (id, key) VALUES (?, ?)`, [id, key]);
  }

  const units = [
    { id: 1, key: 'recipe.units.weight.g', category: 'weight' },
    { id: 2, key: 'recipe.units.weight.kg', category: 'weight' },
    { id: 3, key: 'recipe.units.volume.ml', category: 'volume' },
    { id: 4, key: 'recipe.units.volume.l', category: 'volume' },
    { id: 5, key: 'recipe.units.volume.tsp', category: 'volume' },
    { id: 6, key: 'recipe.units.volume.tbsp', category: 'volume' },
    { id: 7, key: 'recipe.units.volume.cup', category: 'volume' },
    { id: 8, key: 'recipe.units.count.piece', category: 'count' },
    { id: 9, key: 'recipe.units.count.pinch', category: 'count' },
    { id: 10, key: 'recipe.units.count.sheet', category: 'count' },
    { id: 11, key: 'recipe.units.count.string', category: 'count' },
    { id: 12, key: 'recipe.units.misc.bar', category: 'misc' },
    { id: 13, key: 'recipe.units.misc.bag', category: 'misc' },
    { id: 14, key: 'recipe.units.misc.chunk', category: 'misc' },
    { id: 15, key: 'recipe.units.misc.slice', category: 'misc' },
  ];

  for (const { id, key, category } of units) {
    await executeSql(`INSERT OR IGNORE INTO IngredientUnits (id, key, category) VALUES (?, ?, ?)`, [
      id,
      key,
      category,
    ]);
  }
};
