import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSelectedItem,
  addItem,
  deleteItem,
  toggleCategoryFilter,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ItemsSlice = createSlice({
  name: "objects",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedItem.pending, handlePending)
      .addCase(fetchSelectedItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchSelectedItem.rejected, handleRejected)
      .addCase(addItem.pending, handlePending)
      .addCase(addItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addItem.rejected, handleRejected)
      .addCase(deleteItem.pending, handlePending)
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteItem.rejected, handleRejected)
      .addCase(toggleCategoryFilter.pending, handlePending)
      .addCase(toggleCategoryFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleCategoryFilter.rejected, handleRejected);
  },
});

export const ItemsReducer = ItemsSlice.reducer;
