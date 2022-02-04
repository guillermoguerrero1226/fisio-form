import { db } from "../plugins/firebase";

const collection = "patient";
const generalInfoCollection = "patientGeneralInfo";
const muscleEvaluationCollection = "muscleEvaluation";
const upperLimpEvaluationCollection = "upperLimpEvaluation";
const lowerLimpEvaluationCollection = "lowerLimpEvaluation";
const gaitAnalysisCollection = "gaitAnalysis";
const postureEvaluationCollection = "postureEvaluation";
const analyticalPlanCollection = "analyticalPlan";

export const PatientService = {
  GetAllAsync() {
    return db.collection(collection).get();
  },
  SaveAsync(patient) {
    return db.collection(collection).doc(patient.documentNumber).set(patient);
  },
  DeleteAsync(patient) {
    return db.collection(collection).doc(patient.documentNumber).delete();
  },
  SaveGeneralInfoAsync(generalInfo, id) {
    return db.collection(generalInfoCollection).doc(id).set(generalInfo);
  },
  GetGenearlInfoAsync(id) {
    return db.collection(generalInfoCollection).doc(id).get();
  },
  SaveMuscleEvaluation(muscleEvaluation, id) {
    return db
      .collection(muscleEvaluationCollection)
      .doc(id)
      .set(muscleEvaluation);
  },
  GetMuscleEvaluation(id) {
    return db.collection(muscleEvaluationCollection).doc(id).get();
  },
  SaveUpperLimpEvaluation(upperLimpEvaluation, id) {
    return db
      .collection(upperLimpEvaluationCollection)
      .doc(id)
      .set(upperLimpEvaluation);
  },
  GetUpperLimpEvaluation(id) {
    return db.collection(upperLimpEvaluationCollection).doc(id).get();
  },
  SaveLowerLimpEvaluation(lowerLimpEvaluation, id) {
    return db
      .collection(lowerLimpEvaluationCollection)
      .doc(id)
      .set(lowerLimpEvaluation);
  },
  GetLowerLimpEvaluation(id) {
    return db.collection(lowerLimpEvaluationCollection).doc(id).get();
  },
  SaveGaitAnalysis(gaitAnalysis, id) {
    return db.collection(gaitAnalysisCollection).doc(id).set(gaitAnalysis);
  },
  GetGaitAnalysis(id) {
    return db.collection(gaitAnalysisCollection).doc(id).get();
  },
  SavePostureEvaluation(postureEvauation, id) {
    return db
      .collection(postureEvaluationCollection)
      .doc(id)
      .set(postureEvauation);
  },
  GetPostureEvaluation(id) {
    return db.collection(postureEvaluationCollection).doc(id).get();
  },
  SaveAnalyticalPlan(analyticalPlan, id) {
    return db.collection(analyticalPlanCollection).doc(id).set(analyticalPlan);
  },
  GetAnalyticalPlan(id) {
    return db.collection(analyticalPlanCollection).doc(id).get();
  },
};
