<template>
  <v-container v-if="loadingEvent">
    <v-skeleton-loader v-if="loadingEvent" type="card"></v-skeleton-loader>
  </v-container>
  <v-container v-else class="d-flex justify-center">
    <v-card min-width="800">
      <v-card-title class="d-flex justify-center">
        Informacion del Evento
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-12">
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col cols="6">
              <v-text-field
                type="text"
                v-model="event.name"
                :rules="[validator.IsNullOrEmpty]"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-file-input
                accept="image/*"
                label="Imagen"
                v-model="eventImage"
              ></v-file-input>
            </v-col>
          </v-row>

          <v-textarea
            v-model="event.description"
            :rules="[validator.IsNullOrEmpty]"
            label="Descripcion"
            required
          ></v-textarea>
          <v-text-field
            type="text"
            v-model="event.place"
            :rules="[validator.IsNullOrEmpty]"
            label="Lugar"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            v-model="event.initDate"
            :rules="[validator.IsNullOrEmpty]"
            placeholder="2020-10-23"
            label="Fecha de Inicio"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            v-model="event.endDate"
            :rules="[validator.IsNullOrEmpty]"
            label="Fecha de Finalizacion"
            placeholder="2020-10-23"
            required
          ></v-text-field>
          <v-text-field
            v-model="event.availableTickets"
            :rules="[validator.IsNullOrEmpty]"
            type="number"
            label="Numero de boletos"
            required
          ></v-text-field>
          <v-text-field
            v-model="event.price"
            :rules="[validator.IsNullOrEmpty]"
            type="number"
            label="precio"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="d-flex justify-center flex-column">
        <v-btn
          :loading="isSavingTicketInfo"
          color="primary"
          class="mb-2"
          @click="saveAsync"
          >{{ isSaving ? "Guardar" : "Crear" }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import fileHelper from "@/utils/fileHelper";
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";

export default {
  name: "EventSaveForm",
  components: {},
  data: () => {
    return {
      event: {},
      isSaving: false,
      currentId: null,
      isSavingTicketInfo: false,
      loadingEvent: false,
      eventImage: null,
    };
  },
  methods: {
    ...mapActions("event", ["createAsync", "getByIdAsync", "updateAsync"]),
    async saveAsync() {
      let response = null;
      let message = null;
      this.isSavingTicketInfo = true;
      if (this.$refs.form.validate()) {
        await this.convertImage();
        if (this.isSaving) {
          response = await this.updateAsync(this.event);
          message = "Evento guardado exitosamente";
        } else {
          message = "Evento creado exitosamente";
          response = await this.createAsync(this.event);
        }

        if (response.success) {
          this.$dialog.notify.success(message, {
            position: "top-right",
            timeout: 5000,
          });
          this.$router.push({ path: "eventos" });
        } else {
          this.$dialog.notify.error(
            "Un error ocurrio guardando el evento por favor comuniquese con el administrador",
            {
              position: "top-right",
              timeout: 5000,
            }
          );
        }
      }
      this.isSavingTicketInfo = false;
    },
    async convertImage() {
      if (this.eventImage) {
        this.event.image = await fileHelper.toBase64(this.eventImage);
      }
    },
  },
  computed: {
    validator() {
      return validationHelper;
    },
  },
  async created() {
    this.loadingEvent = true;
    if (this.$route.params.id) {
      var response = await this.getByIdAsync(this.$route.params.id);
      this.event = response;
      this.isSaving = true;
    }
    this.loadingEvent = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
