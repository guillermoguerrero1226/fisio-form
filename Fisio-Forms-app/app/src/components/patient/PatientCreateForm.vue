<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary--text justify-center">
            <span v-if="patientBasicInfo.documentNumber">
              Guardar Paciente</span
            >
            <span v-else>Crear Paciente</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" lg="4">
                <v-select
                  :items="[
                    'Cedula de Ciudadania',
                    'Cedula de Extranjeria',
                    'Numero de Identificacion Personal',
                    'Numero de Identificacion Tributaria',
                    'Tarjeta de Identidad',
                    'Pasaporte',
                  ]"
                  dense
                  outlined
                  v-model="patientBasicInfo.documentType"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Tipo de Documento"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.documentNumber"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Numero Documento"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-select
                  :items="['Masculino', 'Femenino']"
                  label="Genero"
                  :rules="[validator.IsNullOrEmpty]"
                  v-model="patientBasicInfo.gender"
                  dense
                  outlined
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.names"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Nombres"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.lastNames"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Apellidos"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.age"
                  :rules="[validator.IsValidNumber]"
                  label="Edad"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.address"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Direccion"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="number"
                  v-model="patientBasicInfo.phone"
                  :rules="[validator.IsValidNumber]"
                  label="Teléfono"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.email"
                  :rules="[validator.IsValidEmail]"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-select
                  :items="[
                    'Soltero',
                    'Casado',
                    'Divorciado',
                    'Separación en proceso judicial',
                    'Viudo',
                  ]"
                  dense
                  outlined
                  v-model="patientBasicInfo.civilStatus"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Estado civil"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-select
                  :items="[
                    'Primaria',
                    'Secundaria',
                    'Técnico',
                    'Tecnológico',
                    'Universitario',
                  ]"
                  dense
                  outlined
                  v-model="patientBasicInfo.schoolGrade"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Escolaridad"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" lg="4">
                <v-text-field
                  dense
                  outlined
                  type="text"
                  v-model="patientBasicInfo.job"
                  :rules="[validator.IsNullOrEmpty]"
                  label="Ocupación"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="cancelCreateAction"
              :disabled="savingPatientInfo"
              >Volver</v-btn
            >
            <v-btn
              @click="save"
              color="primary"
              :loading="savingPatientInfo"
              :disabled="savingPatientInfo"
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import validationHelper from "@/utils/validationHelper";
export default {
  name: "PatientCreateForm",
  computed: {
    ...mapState("user", ["loggedUser"]),
    ...mapState("patient", ["currentPatient"]),
    validator() {
      return validationHelper;
    },
    isNew() {
      return !this.currentPatient?.documentNumber;
    },
    isUserLoggedIn() {
      return this.loggedUser.user || this.loggedUser.token;
    },
  },
  data: () => ({
    patientBasicInfo: {},
    savingPatientInfo: false,
  }),
  methods: {
    ...mapActions("patient", ["savePatient"]),
    ...mapMutations("patient", ["setCurrentPatient"]),
    cancelCreateAction() {
      this.patientBasicInfo = {};
      this.setCurrentPatient(this.patientBasicInfo);
      this.$router.go(-1);
    },
    async save() {
      this.savingPatientInfo = true;
      const response = await this.savePatient(this.patientBasicInfo);
      this.savingPatientInfo = false;
      debugger;
      if (!this.isNew) {
        this.$dialog.notify.success(
          "La informacion del paciente se ha guardado exitosamente",
          {
            position: "top-right",
            timeout: 5000,
          }
        );
      } else {
        let confirm = await this.$dialog.confirm({
          text: "Desea continuar con el registro de la historia clínica",
          title: "El paciente ha sido creado exitosamente",
          type: "info",
          persistent: true,
          actions: {
            false: "No",
            true: {
              color: "info",
              text: "Si",
            },
          },
        });
        if (confirm) {
          this.setCurrentPatient(this.patientBasicInfo);
          this.$router.push({ path: "historia-clinica" });
        }
      }
    },
  },

  async created() {
    if (this.currentPatient?.documentNumber) {
      this.patientBasicInfo = this.currentPatient;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
