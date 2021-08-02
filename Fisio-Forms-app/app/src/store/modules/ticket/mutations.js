import { MutationsHelper } from "../../helpers";

export default {
  addUserTicket: MutationsHelper.pushTo("userTickets"),
  cleanCart: MutationsHelper.set("userTickets"),
  addPurchasedTickets: MutationsHelper.set("purchasedTickets"),
};
