import { executeSql } from 'databases';

export const createTables = async (): Promise<void> => {
  const tableQueries = [
    // RecipeTags 테이블 생성
    `CREATE TABLE IF NOT EXISTS RecipeTags (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      key TEXT UNIQUE NOT NULL
    );`,

    // IngredientUnits 테이블 생성
    `CREATE TABLE IF NOT EXISTS IngredientUnits (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      key TEXT UNIQUE NOT NULL,
      category TEXT
    );`,

    // Recipes 테이블 생성
    `CREATE TABLE IF NOT EXISTS Recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      tagId INTEGER NOT NULL,
      desc TEXT,
      temperature INTEGER,
      time INTEGER,
      isFavorite INTEGER DEFAULT 0,
      sourceUrl TEXT,
      FOREIGN KEY(tagId) REFERENCES RecipeTags(id)
    );`,

    // Ingredients 테이블 생성
    `CREATE TABLE IF NOT EXISTS Ingredients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      recipeId INTEGER NOT NULL,
      name TEXT NOT NULL,
      amount INTEGER NOT NULL,
      unitId INTEGER NOT NULL,
      FOREIGN KEY(recipeId) REFERENCES Recipes(id),
      FOREIGN KEY(unitId) REFERENCES IngredientUnits(id)
    );`,

    // RecipeSteps 테이블 생성
    `CREATE TABLE IF NOT EXISTS RecipeSteps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      recipeId INTEGER NOT NULL,
      FOREIGN KEY(recipeId) REFERENCES Recipes(id)
    );`,

    // CheckList 테이블 생성
    `CREATE TABLE IF NOT EXISTS CheckList (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      isChecked INTEGER DEFAULT 0
    );`,
  ];

  for (const query of tableQueries) {
    await executeSql(query);
  }
};
