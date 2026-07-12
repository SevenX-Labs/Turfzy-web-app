import { api } from "./api";

export const customerService = {
  getCustomerProfile: async () => {
    return api.get("/customer/profile");
  },
};
