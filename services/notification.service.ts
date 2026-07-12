import { api } from "./api";

export const notificationService = {
  getNotifications: async () => {
    return api.get("/notifications");
  },
};
