import { PatientService } from "../../../services/patientService";

export default {
  async getAllPatients({ state, commit }) {
    const result = await PatientService.GetAllAsync();
    const patients = result.docs.map((x) => x.data());
    commit("setPatients", patients);
  },
  async savePatient({ state, commit }, patient) {
    const result = await PatientService.SaveAsync(patient);
  },
  async deletePatient({ state, commit }, patient) {
    const result = await PatientService.DeleteAsync(patient);
    commit("removePatientFromList", patient);
    debugger;
  },
};
