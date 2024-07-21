import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters;
export default filtersSlice.reducer;