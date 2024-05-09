import { createSlice } from "@reduxjs/toolkit";
import { statusFilterbyCategory } from "./constants";

const filtersInitialState = {
  status: statusFilterbyCategory.null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setCategoryFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
