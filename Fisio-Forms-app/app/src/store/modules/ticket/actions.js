import { TicketService } from "../../../services/ticketService";

export default {
  async createAsync({ commit }, ticket) {
    await TicketService.CreateAsync(ticket);
  },
  async getByUserIdAsync({ commit }, userId) {
    const result = await TicketService.GetByUserIdAsync(userId);
    if (result) {
      commit("addPurchasedTickets", result.data);
    }
  },
  addTicketToCart({ commit }, ticket) {
    commit("addUserTicket", ticket);
  },
  cleanCart({ commit }) {
    commit("cleanCart", []);
  },
};
