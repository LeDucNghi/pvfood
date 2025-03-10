import { SignInPayload, SignUpPayload, User } from "@/models";

import axiosClient from "./axios-client";

export const authService = {
  signin(signinPayload: SignInPayload): Promise<{ user: string }> {
    return axiosClient.post(`/auth/signin`, signinPayload);
  },

  signup({ email, password, name }: SignUpPayload): Promise<User> {
    return axiosClient.post(`/auth/signup`, { email, password, name });
  },

  signout() {
    return axiosClient.post("/logout");
  },

  getUserInfo(id: string): Promise<User> {
    return axiosClient.get(`/auth/profile/${id}`);
  },
};
