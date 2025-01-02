export enum RecipeFilterType {
  ALL = 'all',
  FAVORITE = 'favorite',
  COMFITS = 'comfits',
  BREAD = 'bread',
}

export interface RecipeTag {
  id: number;
  key: string; // i18n key
}

export interface IngredientUnit {
  id: number;
  key: string; // i18n key
  category: string;
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: IngredientUnit;
}

export interface RecipeStep {
  id: number;
  content: string;
}

export interface Recipe {
  id: number;
  name: string;
  tag: RecipeTag;
  desc: string;
  temperature: number;
  time: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  isFavorite: boolean;
  sourceUrl?: string;
}

export interface CheckList {
  id: number;
  content: string;
  isChecked: boolean;
}
