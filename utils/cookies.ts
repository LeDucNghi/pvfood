import Cookies from "js-cookie";
import { User } from "@/models";
import { jwtDecode } from "jwt-decode";

export const cookies = {
  setCookie(name: string, value: any, options?: Cookies.CookieAttributes) {
    Cookies.set(name, JSON.stringify(value), options);
  },

  getCookie(name: string) {
    const cookie = Cookies.get(name)!;

    if (cookie) {
      const decodedToken = jwtDecode(cookie);

      return decodedToken as User;
    }

    return undefined;
  },

  removeCookie(name: string) {
    Cookies.remove(name);
  },
};
