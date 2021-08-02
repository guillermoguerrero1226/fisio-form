import { db } from "../plugins/firebase";
const collection = "cases";
export const CaseService = {
  GetAllAsync() {
    return db.collection(collection).get();
  },
  SaveAsync(caseObject) {
    return db.collection(collection).add(caseObject);
  },
};
