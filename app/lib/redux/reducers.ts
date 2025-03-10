import { authReducer } from "./features/auth-slice";
import { cartReducer } from "./features/cart-slice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
