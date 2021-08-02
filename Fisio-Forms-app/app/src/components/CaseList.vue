<template>
  <v-container>
    <div v-if="loadingCases">
      <v-skeleton-loader
        class="mb-4"
        elevation="2"
        type="table"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <v-data-table
        no-data-text="No hay usuarios registrados"
        :headers="headers"
        :items="cases"
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
        <template v-slot:item.name="{ item }">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span class="c-pointer info--text" v-on="on" v-bind="attrs">{{
                item.name
              }}</span>
            </template>
            <span>Ver caso</span>
          </v-tooltip>
        </template>
        <template v-slot:item.createdbyUser="{ item }">
          <span>{{
            item.createdbyUser.lastname + " " + item.createdbyUser.firstname
          }}</span>
        </template>
        <template v-slot:item.responseTimeObject="{ item }">
          <span>{{ item.responseTimeObject.description }}</span>
        </template>
        <template v-slot:item.radicatedOn="{ item }">
          <span>{{
            item.radicatedOn | moment("MMMM DD YYYY, h:mm:ss a")
          }}</span>
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
import { mapActions, mapState } from "vuex";
import fileHelper from "@/utils/fileHelper";

export default {
  name: "CaseList",
  props: {
    title: {
      type: String,
      required: false,
      default: "title",
    },
  },
  computed: {
    ...mapState("user", ["loggedUser"]),
    ...mapState("cases", ["cases"]),
    isUserLoggedIn() {
      return this.loggedUser.user || this.loggedUser.token;
    },
  },
  data: () => ({
    loadingCases: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "name",
      },
      {
        text: "Tiempo de Respuesta",
        align: "start",
        sortable: true,
        value: "responseTimeObject",
      },
      {
        text: "Radicado Por",
        align: "start",
        sortable: true,
        value: "createdbyUser",
      },

      {
        text: "Radicado En",
        align: "start",
        sortable: true,
        value: "radicatedOn",
      },
    ],
  }),
  methods: {
    ...mapActions("cases", ["getAllCases"]),
    ...mapActions("ticket", ["addTicketToCart"]),
    GoToAddUser() {
      this.$router.push({ path: "registrar-usuario" });
    },
  },
  async created() {
    this.loadingCases = true;
    await this.getAllCases();
    this.loadingCases = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
