import apiService from "./apiService.js";
const BASE_URL = "boletos/";
export const TicketService = {
  CreateAsync(ticket) {
    return apiService.post(BASE_URL, ticket);
  },
  GetByUserIdAsync(userId) {
    return apiService.get(`${BASE_URL}${userId}`);
  },
};
