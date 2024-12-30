import SQLite from 'react-native-sqlite-storage';
import { executeSql } from 'databases';
import { RecipeTag } from 'models';

const getAllRecipeTags = async (): Promise<RecipeTag[]> => {
  const query = 'SELECT * FROM RecipeTags ORDER BY id ASC;';
  const result = (await executeSql(query)) as SQLite.ResultSet;
  const tags: RecipeTag[] = [];

  for (let i = 0; i < result.rows.length; i++) {
    tags.push(result.rows.item(i) as RecipeTag);
  }

  return tags;
};

export const RecipeTagQuery = { getAllRecipeTags };
