import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartNumber: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartNumber++;
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      state.cartNumber++;
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      state.cartNumber--;
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity === 1) {
        item.quantity--;
        state.cart = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    clearCart: (state) => {
      state.cart = [];
      state.cartNumber = 0;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;
