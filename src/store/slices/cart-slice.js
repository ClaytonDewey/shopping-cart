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
      console.log(action);
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

/*
 * TODO: rewrite addToCart (dont't use .push)
 */
