import { api } from "./api";

export const bookingService = {
  getBookings: async () => {
    return api.get("/bookings");
  },
  createBooking: async () => {
    return api.post("/bookings", {});
  },
};
