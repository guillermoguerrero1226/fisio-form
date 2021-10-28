import { db } from "../plugins/firebase";

const collection = "patient";

export const PatientService = {
  GetAllAsync() {
    return db.collection(collection).get();
  },
  SaveAsync(patient) {
    return db.collection(collection).doc(patient.documentNumber).set(patient);
  },
  DeleteAsync(patient) {
    debugger;
    return db.collection(collection).doc(patient.documentNumber).delete();
  },
};
