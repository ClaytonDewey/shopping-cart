// import createSlice
// initialize intial state
// create the slice -> name, mention initial state, action

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.push(action.payload);
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

/*
 * TODO: rewrite addToCart (dont't use .push)
 */
