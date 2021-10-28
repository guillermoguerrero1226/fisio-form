<template>
  <v-container>
    <div v-if="loadingPatients">
      <v-skeleton-loader
        class="mb-4"
        elevation="2"
        type="table"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <v-data-table
        no-data-text="No hay pacientes registrados"
        :headers="headers"
        :items="patients"
        :items-per-page="5"
        :footer-props="{
          'items-per-page-text': 'Registros por pagina',
          'items-per-page-all-text': 'Todos',
        }"
        :header-props="{
          sortByText: 'Ordernar por',
        }"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="mr-2 gray--text"
                @click="editPatient(item)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-pencil
              </v-icon>
            </template>
            <span>Editar Paciente</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="mr-2 info--text"
                @click="editClinicHistory(item)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-clipboard-text
              </v-icon>
            </template>
            <span>Historia Clínica</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="mr-2 red--text"
                @click="deleteSelectedPatient(item)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-delete
              </v-icon>
            </template>
            <span>Elminar Paciente</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>
    <v-fab-transition>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            absolute
            bottom
            right
            fab
            v-on="on"
            v-bind="attrs"
            @click="GoToAddUser"
            style="top: 85%"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Agregar usuario</span>
      </v-tooltip>
    </v-fab-transition>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import fileHelper from "@/utils/fileHelper";

export default {
  name: "PatientList",
  props: {
    title: {
      type: String,
      required: false,
      default: "title",
    },
  },
  computed: {
    ...mapState("user", ["loggedUser"]),
    ...mapState("patient", ["patients"]),
    isUserLoggedIn() {
      return this.loggedUser.user || this.loggedUser.token;
    },
  },
  data: () => ({
    loadingPatients: false,
    headers: [
      {
        text: "Tipo de Documento",
        align: "start",
        sortable: true,
        value: "documentType",
      },
      {
        text: "Numero de Documento",
        align: "start",
        sortable: true,
        value: "documentNumber",
      },
      {
        text: "Nombres",
        align: "start",
        sortable: true,
        value: "names",
      },
      {
        text: "Apellidos",
        align: "start",
        sortable: true,
        value: "lastNames",
      },
      {
        text: "Edad",
        align: "start",
        sortable: true,
        value: "age",
      },
      {
        text: "Email",
        align: "start",
        sortable: true,
        value: "email",
      },
      {
        text: "Acciones",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  methods: {
    ...mapActions("patient", ["getAllPatients", "deletePatient"]),
    ...mapActions("ticket", ["addTicketToCart"]),
    ...mapMutations("patient", ["setCurrentPatient"]),

    GoToAddUser() {
      this.$router.push({ path: "guardar-paciente" });
    },
    editPatient(patient) {
      this.setCurrentPatient(patient);
      this.$router.push({ path: "guardar-paciente" });
    },
    editClinicHistory(patient) {
      this.setCurrentPatient(patient);
      this.$router.push({ path: "historia-clinica" });
    },
    async deleteSelectedPatient(patient) {
      let confirm = await this.$dialog.confirm({
        text:
          "Toda la informacion relacionada al paciente incluida la historia clínica sera eliminada, esta seguro de eliminar el paciente seleccionado?",
        title: "Eliminar Paciente",
        type: "warning",
        actions: {
          false: "No",
          true: {
            color: "info",
            text: "Si",
          },
        },
      });
      debugger;
      if (confirm) {
        await this.deletePatient(patient);
      }
    },
  },
  async created() {
    this.setCurrentPatient({});
    this.loadingPatients = true;
    await this.getAllPatients();
    this.loadingPatients = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
