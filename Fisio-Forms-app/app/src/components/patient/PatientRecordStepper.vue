<template>
  <div class="mt-4">
    <v-stepper v-model="currentStep" non-linear class="stepper elevation-0">
      <v-stepper-header class="secondary white--text sticky">
        <v-stepper-step
          editable
          step="1"
          :complete="currentStep > 1"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 1
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
          :complete="currentStep > 2"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="3"
          :complete="currentStep > 3"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 3
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="4"
          :complete="currentStep > 4"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 4</v-stepper-step
        >
        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="5"
          :complete="currentStep > 5"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 5</v-stepper-step
        >
        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="6"
          :complete="currentStep > 6"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 6</v-stepper-step
        >
        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="7"
          :complete="currentStep > 7"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 7</v-stepper-step
        >
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="px-0">
          <patient-general-info-save-form
            @nextPage="nextStep"
          ></patient-general-info-save-form>
        </v-stepper-content>

        <v-stepper-content step="2">
          <patient-muscle-evaluation
            @nextPage="nextStep"
          ></patient-muscle-evaluation>
        </v-stepper-content>

        <v-stepper-content step="3">
          <patient-upper-limb-arches-test
            @nextPage="nextStep"
          ></patient-upper-limb-arches-test>
        </v-stepper-content>
        <v-stepper-content step="4">
          <patient-lower-limb-arches-test
            @nextPage="nextStep"
          ></patient-lower-limb-arches-test>
        </v-stepper-content>
        <v-stepper-content step="5">
          <patient-gait-analysis @nextPage="nextStep"></patient-gait-analysis>
        </v-stepper-content>
        <v-stepper-content step="6">
          <posture-evaluation @nextPage="nextStep"></posture-evaluation>
        </v-stepper-content>
        <v-stepper-content step="7">
          <assessment-form-analytical-plan
            @nextPage="nextStep"
          ></assessment-form-analytical-plan>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import PatientGeneralInfoSaveForm from "../../components/PatientGeneralInfoSaveForm";
import PatientMuscleEvaluation from "../../components/patient/PatientMuscleEvaluation";
import PatientUpperLimbArchesTest from "../../components/patient/PatientUpperLimbArchesTest";
import PatientLowerLimbArchesTest from "../../components/patient/PatientLowerLimbArchesTest";
import PatientGaitAnalysis from "../../components/patient/PatientGaitAnalysis";
import PostureEvaluation from "../../components/patient/PostureEvaluation";
import AssessmentFormAnalyticalPlan from "../../components/patient/AssessmentFormAnalyticalPlan";
export default {
  name: "PatientRecordStepper",
  components: {
    PatientGeneralInfoSaveForm,
    PatientMuscleEvaluation,
    PatientUpperLimbArchesTest,
    PatientLowerLimbArchesTest,
    PatientGaitAnalysis,
    PostureEvaluation,
    AssessmentFormAnalyticalPlan,
  },
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep(isBack) {
      const step = parseInt(this.currentStep);
      this.currentStep = isBack ? step - 1 : step + 1;
    },
  },
};
</script>
