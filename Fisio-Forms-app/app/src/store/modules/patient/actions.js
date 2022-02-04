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
  },
  async saveGeneralInfo({ state, commit }, { generalInfo, id }) {
    const result = await PatientService.SaveGeneralInfoAsync(generalInfo, id);
    const currentPatient = { ...state.currentPatient, generalInfo };
    commit("setCurrentPatient", currentPatient);
  },
  async getGeneralInfo({ state, commit }, id) {
    const result = await PatientService.GetGenearlInfoAsync(id);
    const generalInfo = result.data();
    const currentPatient = { ...state.currentPatient, generalInfo };
    commit("setCurrentPatient", currentPatient);
  },
  async saveMuscleEvaluation({ state, commit }, { muscleEvaluation, id }) {
    const result = await PatientService.SaveMuscleEvaluation(
      muscleEvaluation,
      id
    );
    const currentPatient = { ...state.currentPatient, muscleEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async getMuscleEvaluation({ state, commit }, id) {
    const result = await PatientService.GetMuscleEvaluation(id);
    const muscleEvaluation = result.data();
    const currentPatient = { ...state.currentPatient, muscleEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async saveUpperLimpEvaluation(
    { state, commit },
    { upperLimpEvaluation, id }
  ) {
    const result = await PatientService.SaveUpperLimpEvaluation(
      upperLimpEvaluation,
      id
    );
    const currentPatient = { ...state.currentPatient, upperLimpEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async getUpperLimpEvaluation({ state, commit }, id) {
    const result = await PatientService.GetUpperLimpEvaluation(id);
    const upperLimpEvaluation = result.data();
    const currentPatient = { ...state.currentPatient, upperLimpEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async saveLowerLimpEvaluation(
    { state, commit },
    { lowerLimpEvaluation, id }
  ) {
    const result = await PatientService.SaveLowerLimpEvaluation(
      lowerLimpEvaluation,
      id
    );
    const currentPatient = { ...state.currentPatient, lowerLimpEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async getLowerLimpEvaluation({ state, commit }, id) {
    const result = await PatientService.GetLowerLimpEvaluation(id);
    const lowerLimpEvaluation = result.data();
    const currentPatient = { ...state.currentPatient, lowerLimpEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async saveGaitAnalysis({ state, commit }, { gaitAnalysis, id }) {
    const result = await PatientService.SaveGaitAnalysis(gaitAnalysis, id);
    const currentPatient = { ...state.currentPatient, gaitAnalysis };
    commit("setCurrentPatient", currentPatient);
  },
  async getGaitAnalysis({ state, commit }, id) {
    const result = await PatientService.GetGaitAnalysis(id);
    const gaitAnalysis = result.data();
    const currentPatient = { ...state.currentPatient, gaitAnalysis };
    commit("setCurrentPatient", currentPatient);
  },
  async savePostureEvaluation({ state, commit }, { postureEvaluation, id }) {
    const result = await PatientService.SavePostureEvaluation(
      postureEvaluation,
      id
    );
    const currentPatient = { ...state.currentPatient, postureEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async getPostureEvaluation({ state, commit }, id) {
    const result = await PatientService.GetPostureEvaluation(id);
    const postureEvaluation = result.data();
    const currentPatient = { ...state.currentPatient, postureEvaluation };
    commit("setCurrentPatient", currentPatient);
  },
  async saveAnalyticalPlan({ state, commit }, { analyticalPlan, id }) {
    const result = await PatientService.SaveAnalyticalPlan(analyticalPlan, id);
    const currentPatient = { ...state.currentPatient, analyticalPlan };
    commit("setCurrentPatient", currentPatient);
  },
  async getAnalyticalPlan({ state, commit }, id) {
    const result = await PatientService.GetAnalyticalPlan(id);
    const analyticalPlan = result.data();
    const currentPatient = { ...state.currentPatient, analyticalPlan };
    commit("setCurrentPatient", currentPatient);
  },
};
