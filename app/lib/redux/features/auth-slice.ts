import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { User } from "@/models";

export interface AuthState {
  user: User | null;
}

const initialState = {
  user: null,
} as AuthState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { fetchUser } = auth.actions;

export const selectUser = (state: RootState) => state.auth.user;

export const authReducer = auth.reducer;
