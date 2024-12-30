import { RecipeTag } from 'models';
import { RecipeTagQuery } from './queries';

const fetchAllRecipeTags = async (): Promise<RecipeTag[]> => {
  const tags = await RecipeTagQuery.getAllRecipeTags();
  return tags;
};

export const RecipeTagAction = { fetchAllRecipeTags };
