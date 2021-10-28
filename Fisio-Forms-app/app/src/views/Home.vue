<template>
  <div>
    <v-app-bar app dark flat color="primary">
      <div class="d-flex align-center">
        <v-img
          max-height="50"
          max-width="50"
          src="../assets/icons/form.png"
        ></v-img>
        <v-toolbar-title class="ml-4">Historia Clinica Motrix</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-menu bottom left :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link>
            <v-list-item-title class="px-4"
              ><v-switch
                color="secondary"
                v-model="isDarkTheme"
                label="Habilitar modo oscuro"
                @change="darkThemeToggle"
              ></v-switch
            ></v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="isUserLoggedIn">
            <v-list-item-title class="px-4" @click="logout()"
              ><v-icon large> mdi-exit-to-app </v-icon
              ><span class="px-1">Salir</span></v-list-item-title
            >
          </v-list-item>
          <v-list-item v-else link>
            <v-list-item-title class="px-4" @click="login()"
              ><v-icon large> mdi-login </v-icon
              ><span class="px-1">Ingresar</span></v-list-item-title
            >
          </v-list-item>
        </v-list>
        <v-list> </v-list>
      </v-menu>
    </v-app-bar>
    <v-container fluid class="mt-0">
      <v-row align="center">
        <v-divider class="primary"></v-divider>
        <h2 class="mx-4 primary--text">Historia Clínica Fisioterapia</h2>
        <v-divider class="primary"></v-divider>
      </v-row>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <v-bottom-navigation fixed app active-class="primary white--text">
        <v-btn @click="navigateTo('home')">
          <span>Usuarios</span>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
        <v-btn @click="navigateTo('historia-clinica')">
          <span>Mi Perfil</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {
      activeMainLink: this.$route.name,
      collapedNavigation: true,
      isDarkTheme: false,
      menuOptions: [
        {
          title: "Casos",
          icon: "mdi-format-list-text",
          to: "/casos",
        },
        {
          title: "Usuarios",
          icon: "mdi-account-multiple",
          to: "/mis-boletos",
        },
      ],
      right: null,
    };
  },
  computed: {
    ...mapState("user", ["isDarkThemeEnabled", "loggedUser"]),
    ...mapState("ticket", ["userTickets", "cleanCart"]),
    ...mapState("patient", ["patient"]),

    isUserLoggedIn() {
      return this.loggedUser;
    },
  },
  methods: {
    ...mapActions("user", ["toggleDarkTheme", "logoutUser"]),
    darkThemeToggle() {
      this.toggleDarkTheme(this.isDarkTheme);
      this.$vuetify.theme.dark = this.isDarkThemeEnabled;
    },
    logout() {
      this.logoutUser();
      this.$router.push({ path: "login" });
    },
    login() {
      this.$router.push({ path: "login" });
    },
    navigateTo(route) {
      this.$router.push({ path: route });
    },
  },
  created() {
    this.isDarkTheme = this.isDarkThemeEnabled;
    this.$vuetify.theme.dark = this.isDarkThemeEnabled;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
