import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'features';
import { IngredientUnitActions } from 'databases/ingredientUnit/actions';
import { setUnitList } from 'features/unitSlice';

export default function useLoadInitialData(): boolean {
  const dispatch = useDispatch();

  const unitList = useSelector((state: RootState) => state.units.unitList);

  const loadInitialData = useCallback(async () => {
    if (unitList.length === 0) {
      try {
        const units = await IngredientUnitActions.fetchAllIngredientUnits();
        dispatch(setUnitList(units));
      } catch (error) {
        console.error('Failed to load units:', error);
      }
    }
  }, [dispatch, unitList.length]);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  return unitList.length > 0;
}
