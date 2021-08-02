import { db } from "../plugins/firebase";
const collection = "userTypes";
export const UserTypeService = {
  GetAllAsync() {
    return db.collection(collection).get();
  },
};
