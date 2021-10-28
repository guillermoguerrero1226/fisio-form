import { MutationsHelper } from "../../helpers";

export default {
  setPatients: MutationsHelper.set("patients"),
  setCurrentPatient: MutationsHelper.set("currentPatient"),
  removePatientFromList: MutationsHelper.addOrRemove("patients"),
};
