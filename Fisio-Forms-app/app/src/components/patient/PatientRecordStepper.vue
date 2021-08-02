<template>
  <div class="mt-4">
    <v-stepper v-model="e1" non-linear class="stepper elevation-0">
      <v-stepper-header class="secondary white--text sticky">
        <v-stepper-step
          editable
          step="1"
          :complete="e1 > 1"
          :complete-icon="'mdi-check'"
          :edit-icon="'mdi-check'"
        >
          Pagína 1
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step editable step="2"> Pagína 2 </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3"> Pagína 3 </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step editable step="4"> Pagína 4</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step editable step="5"> Pagína 5</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step editable step="6"> Pagína 6</v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step editable step="7"> Pagína 7</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="px-0">
          <patient-general-info-save-form></patient-general-info-save-form>
          <div class="d-flex justify-end">
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <patient-muscle-evaluation></patient-muscle-evaluation>
          <div class="d-flex justify-end">
            <v-btn color="primary" text @click="e1 = e1 - 1">
              Pagina Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
        </v-stepper-content>

        <v-stepper-content step="3">
          <patient-upper-limb-arches-test></patient-upper-limb-arches-test>
          <div class="d-flex justify-end">
            <v-btn color="primary" text @click="e1 = e1 - 1">
              Pagina Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="4">
          <patient-lower-limb-arches-test></patient-lower-limb-arches-test>
          <div class="d-flex justify-end">
            <v-btn color="primary" text @click="e1 = e1 - 1">
              Pagina Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="5">
          <patient-upper-limb-arches-test></patient-upper-limb-arches-test>
          <div class="d-flex justify-end">
            <v-btn color="primary" text @click="e1 = e1 - 1">
              Pagina Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="6">
          <patient-upper-limb-arches-test></patient-upper-limb-arches-test>
          <div class="d-flex justify-end">
            <v-btn color="primary" text @click="e1 = e1 - 1">
              Pagina Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="7">
          <patient-upper-limb-arches-test></patient-upper-limb-arches-test>
          <div class="d-flex justify-end">
            <v-btn color="primary" text @click="e1 = e1 - 1">
              Pagina Anterior
            </v-btn>
            <v-btn color="primary" @click="e1 = e1 + 1">
              Siguiente Pagina
            </v-btn>
          </div>
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
export default {
  name: "PatientRecordStepper",
  components: {
    PatientGeneralInfoSaveForm,
    PatientMuscleEvaluation,
    PatientUpperLimbArchesTest,
    PatientLowerLimbArchesTest,
  },
  data() {
    return {
      e1: 1,
    };
  },
  methods: {},
};
</script>
