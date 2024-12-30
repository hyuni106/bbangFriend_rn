export enum RecipeFilterType {
  ALL = 'all',
  FAVORITE = 'favorite',
  COMFITS = 'comfits',
  BREAD = 'bread',
}

export interface Tag {
  id: number;
  key: string; // i18n key
}

export interface Unit {
  id: number;
  key: string; // i18n key
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: Unit;
}

export interface Recipe {
  id: number;
  name: string;
  tag: Tag;
  desc: string;
  temperature: number;
  time: number;
  ingredients: Ingredient[];
  recipe: string[];
  isFavorite: boolean;
  sourceUrl?: string;
}

export interface CheckList {
  id: number;
  content: string;
  isChecked: boolean;
}
