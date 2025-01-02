import SQLite from 'react-native-sqlite-storage';
import { executeSql } from 'databases';
import { IngredientUnitQueries } from './queries';
import { IngredientUnit } from 'models';

const fetchAllIngredientUnits = async (): Promise<IngredientUnit[]> => {
  const query = IngredientUnitQueries.GET_ALL;
  const result = (await executeSql(query)) as SQLite.ResultSet;
  const units: IngredientUnit[] = [];

  if (result.rows.length > 0) {
    for (let i = 0; i < result.rows.length; i++) {
      units.push(result.rows.item(i) as IngredientUnit);
    }
  }

  return units;
};

export const IngredientUnitActions = { fetchAllIngredientUnits };
