import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    items: [
      {
        id: nanoid(),
        picture: "path/to/image",
        name: "House",
        price: "$500,000",
        description: "Beautiful house description",
        category: "Commerce",
      },
      {
        id: nanoid(),
        picture: "path/to/image",
        name: "Apartment",
        price: "$300,000",
        description: "Cozy apartment description",
        category: "Buy",
      },
      {
        id: nanoid(),
        picture: "path/to/image",
        name: "Villa",
        price: "$1,000,000",
        description: "Luxurious villa description",
        category: "Rent",
      },
      {
        id: nanoid(),
        picture: "path/to/image",
        name: "Condo",
        price: "$400,000",
        description: "Modern condo description",
        category: "New Building",
      },
    ],
    categoryFilter: null,
  },
  reducers: {
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
  },
});

const filtersReducer = filtersSlice.reducer;

export const { setCategoryFilter } = filtersSlice.actions;
export const selectCategoryFilter = (state) => state.filters.categoryFilter;
export const selectItems = (state) => state.filters.items;

export default filtersReducer;
