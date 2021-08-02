import { db } from "../plugins/firebase";
const collection = "responseTimes";
export const ResponseTimeService = {
  GetAllAsync() {
    return db.collection(collection).get();
  },
};
