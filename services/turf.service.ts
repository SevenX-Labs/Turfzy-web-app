import { api } from "./api";

export const turfService = {
  getTurfs: async () => {
    return api.get("/turfs");
  },
  getTurfById: async (id: string) => {
    return api.get(`/turfs/${id}`);
  },
};
