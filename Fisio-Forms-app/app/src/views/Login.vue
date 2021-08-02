<template>
  <v-container class="d-flex justify-center flex-column">
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <h1 class="primary--text">Historia Clinica Motrix</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-card width="400">
          <v-card-title class="primary white--text d-flex justify-center">
            Inicio de Sesion
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-8">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                type="email"
                v-model="email"
                :rules="[validator.IsNullOrEmpty, validator.IsValidEmail]"
                label="Correo Electronico"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[validator.IsNullOrEmpty]"
                type="password"
                label="Contraseña"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="d-flex justify-center flex-column">
            <v-btn
              color="primary"
              class="mb-2"
              @click="loginAsync"
              :loading="isLogin"
              >Ingresar</v-btn
            >
            <router-link :to="{ name: 'registrarse' }">
              <v-btn text color="default">Registrarse</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { LoginService } from "../services/loginService";
import validationHelper from "@/utils/validationHelper";
import firebaseErrorHandlerHelper from "@/utils/firebaseErrorHandlerHelper";
import firebase from "firebase";
export default {
  name: "login",
  components: {},
  data: () => {
    return {
      email: null,
      password: null,
      user: {},
      valid: true,
      numPages: undefined,
      isLogin: false,
    };
  },
  methods: {
    ...mapActions("user", ["setLoggedUser"]),
    async loginAsync() {
      this.isLogin = true;
      if (this.isFormValid) {
        try {
          const res = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
          debugger;
          this.user.id = res.user.uid;
          this.user.additionalUserInfo = res.additionalUserInfo;
          this.user.refreshToken = res.user.refreshToken;
          this.setLoggedUser(this.user);
          this.$router.push({ path: "home" });
        } catch (error) {
          const message = firebaseErrorHandlerHelper[error.code];
          this.$dialog.notify.error(message, {
            position: "top-right",
            timeout: 5000,
          });
        }
      }
      this.isLogin = false;
    },
  },
  computed: {
    validator() {
      return validationHelper;
    },
    isFormValid() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
