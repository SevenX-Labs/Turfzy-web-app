import { api } from "./api";

export const paymentService = {
  initializePayment: async () => {
    return api.post("/payments/initialize", {});
  },
};
