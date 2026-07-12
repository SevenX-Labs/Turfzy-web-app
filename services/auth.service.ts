import { api } from "./api";

export const authService = {
  login: async () => {
    return api.post("/auth/login", {});
  },
  verifyOtp: async () => {
    return api.post("/auth/verify-otp", {});
  },
  logout: async () => {
    return api.post("/auth/logout", {});
  },
};
