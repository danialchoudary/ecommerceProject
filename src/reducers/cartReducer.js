import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.cartCount += 1;
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.cartCount -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


