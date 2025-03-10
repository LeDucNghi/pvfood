import { CartState, Product } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const initialState = {
  cart: {
    items: [],
    total: 0,
    subtotal: 0,
    discount: 0,
  },
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.items.push(action.payload);

      const index = state.cart.items.findIndex(
        (x) => x.id === action.payload.id
      );

      state.cart.items[index].quantity = 1;

      const subtotalPrice = state.cart.items.reduce((a, item) => {
        return a + item.quantity! * item.basePrice!;
      }, 0);

      state.cart.subtotal = subtotalPrice;
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.cart.items = state.cart.items.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const index = state.cart.items.findIndex(
        (x) => x.id === action.payload.id
      );

      state.cart.items[index].quantity = state.cart.items[index].quantity! += 1;

      state.cart.items[index].basePrice =
        state.cart.items[index].quantity! * state.cart.items[index].price!;

      const subtotalPrice = state.cart.items.reduce((a, item) => {
        return a + item.quantity! * item.price!;
      }, 0);

      state.cart.subtotal = subtotalPrice;
    },

    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const index = state.cart.items.findIndex(
        (x) => x.id === action.payload.id
      );

      state.cart.items[index].quantity = state.cart.items[index].quantity! -= 1;

      state.cart.items[index].basePrice =
        state.cart.items[index].quantity! * state.cart.items[index].price!;

      const subtotalPrice = state.cart.items.reduce((a, item) => {
        return a + item.quantity! * item.price!;
      }, 0);

      state.cart.subtotal = subtotalPrice;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cart.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export const cartReducer = cart.reducer;
