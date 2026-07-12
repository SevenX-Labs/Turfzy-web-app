import { api } from "./api";

export const ownerService = {
  getOwnerDashboardData: async () => {
    return api.get("/owner/dashboard");
  },
};
