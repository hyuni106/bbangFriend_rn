import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeTag } from 'models';

interface TagState {
  tagList: RecipeTag[];
}

const initialState: TagState = {
  tagList: [],
};

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTagList(state, action: PayloadAction<RecipeTag[]>) {
      state.tagList = action.payload;
    },
  },
});

export const { setTagList } = tagSlice.actions;
export default tagSlice.reducer;
