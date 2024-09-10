import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    selectedCategory: null,
    searchTerm: '', // Add searchTerm to the state
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { fetchProducts, selectCategory, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;


