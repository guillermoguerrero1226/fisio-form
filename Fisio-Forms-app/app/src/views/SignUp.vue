<template>
  <v-container class="d-flex justify-center flex-column">
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-card width="400">
          <v-card-title class="primary white--text d-flex">
            <div>
              <v-btn icon to="/login">
                <v-icon color="white">mdi-arrow-left</v-icon>
              </v-btn>
            </div>
            <div>
              <span>Registro De Usuario</span>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-8">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                type="email"
                v-model="user.email"
                :rules="[validator.IsNullOrEmpty, validator.IsValidEmail]"
                label="Correo Electronico"
                required
                autocomplete
              ></v-text-field>
              <v-text-field
                type="text"
                v-model="user.firstname"
                :rules="[validator.IsNullOrEmpty]"
                label="Nombres"
                required
              ></v-text-field>
              <v-text-field
                type="text"
                v-model="user.lastname"
                :rules="[validator.IsNullOrEmpty]"
                label="Apellidos"
                required
              ></v-text-field>
              <v-text-field
                v-model="user.password"
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
              @click="signUpAsync"
              :loading="isCreating"
              >Enviar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { UserService } from "../services/userService";
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState, mapGetters } from "vuex";
import { db, auth } from "../plugins/firebase";
import firebaseErrorHandlerHelper from "@/utils/firebaseErrorHandlerHelper";

export default {
  name: "signUp",
  components: {},
  data: () => {
    return {
      valid: true,
      user: {},
      isCreating: false,
    };
  },
  methods: {
    ...mapActions("userType", ["getAllUserTypes"]),
    ...mapActions("user", ["setLoggedUser"]),
    async signUpAsync() {
      if (this.isFormValid) {
        this.isCreating = true;
        try {
          var res = await auth.createUserWithEmailAndPassword(
            this.user.email,
            this.user.password
          );
          this.user.id = res.user.uid;
          const res3 = await this.db
            .collection("user")
            .doc(this.user.id)
            .set(this.user);
          this.$router.push({ path: "home" });
          this.setLoggedUser(this.user);
          this.$dialog.notify.success(
            "El usuario ha sido creado exitosamente",
            {
              position: "top-right",
              timeout: 5000,
            }
          );
        } catch (error) {
          const message = firebaseErrorHandlerHelper[error.code];
          this.$dialog.notify.error(message, {
            position: "top-right",
            timeout: 5000,
          });
        }
        this.isCreating = false;
      }
    },
  },
  computed: {
    ...mapState("userType", ["userTypes"]),
    ...mapGetters("userType", ["getUserTypes"]),
    validator() {
      return validationHelper;
    },
    db() {
      return db;
    },
    isFormValid() {
      return this.$refs?.form?.validate();
    },
  },
  async created() {
    await this.getAllUserTypes();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
