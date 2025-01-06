import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IngredientUnit } from 'models';

interface UnitState {
  unitList: IngredientUnit[];
}

const initialState: UnitState = {
  unitList: [],
};

const unitSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setUnitList(state, action: PayloadAction<IngredientUnit[]>) {
      state.unitList = action.payload;
    },
  },
});

export const { setUnitList } = unitSlice.actions;
export default unitSlice.reducer;
