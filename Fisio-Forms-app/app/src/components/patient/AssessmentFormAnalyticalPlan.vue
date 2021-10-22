<template>
  <v-container
    fluid
    v-if="isLoadingInfo"
    class="d-flex justify-center flex-column px-0"
  >
    <v-row v-for="item in (1, 2, 3, 4)" :key="item">
      <v-col cols="12" md="6" lg="8">
        <v-skeleton-loader cols="12" type="image"></v-skeleton-loader>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-skeleton-loader cols="12" type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid v-else class="d-flex justify-center px-0">
    <v-form ref="form" lazy-validation>
      <v-row no-gutters class="mb-4">
        <v-col cols="12" class="d-flex justify-center"
          ><h3>
            Formulario de valoración de la batería breve de valoración funcional
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="primary--text justify-center">
              Prueba de Equilibrio
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" lg="6">
                  <p class="font-weight-bold">
                    El sujeto debe ser capaz de ponerse de pie, sin ayuda de
                    bastines o andadores.
                  </p>
                  <p>A. Posición con los pies juntos.</p>
                  <p class="ml-4">(1) Se sostuvo durante 10 segundos</p>
                  <p class="ml-4">(0) No se sostuvo durante 10 segundos</p>
                  <p class="ml-4">
                    (0) No lo intentó
                    <v-text-field
                      class="w-100-px"
                      dense
                      type="text"
                      v-model="pruebaArcosMiembrosInferiores.lastNames"
                      :rules="[validator.IsNullOrEmpty]"
                      label=""
                      required
                    ></v-text-field>
                  </p>
                  <p class="font-weight-bold">
                    En caso de obtener cero puntos, termine la prueba de
                    equilibrio.
                  </p>
                  <p>B. Posición de semitándem.</p>
                  <p class="ml-4">(1) Se sostuvo durante 10 segundos</p>
                  <p class="ml-4">(0) No se sostuvo durante 10 segundos</p>
                  <p class="ml-4">
                    (0) No lo intentó
                    <v-text-field
                      class="w-100-px"
                      dense
                      type="text"
                      v-model="pruebaArcosMiembrosInferiores.lastNames"
                      :rules="[validator.IsNullOrEmpty]"
                      label=""
                      required
                    ></v-text-field>
                  </p>
                  <p class="font-weight-bold">
                    Número de segundos con equilibrio si es inferior a los 10
                    segundos.
                  </p>
                  <p>C. Posición en tándem completo.</p>
                  <p class="ml-4">(2) Se sostuvo durante 10 segundos</p>
                  <p class="ml-4">(1) Se sostuvo durante 3 a 9 segundos</p>
                  <p class="ml-4">
                    (0) No se sostuvo durante al menos 3 segundos
                  </p>
                  <p class="ml-4">
                    (0) No lo intentó
                    <v-text-field
                      class="w-100-px"
                      dense
                      type="text"
                      v-model="pruebaArcosMiembrosInferiores.lastNames"
                      :rules="[validator.IsNullOrEmpty]"
                      label=""
                      required
                    ></v-text-field>
                  </p>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <p>
                    Número de segundos con equilibrio si es inferior a 10
                    segundos
                    <v-text-field
                      class="w-100-px"
                      dense
                      type="text"
                      v-model="pruebaArcosMiembrosInferiores.lastNames"
                      :rules="[validator.IsNullOrEmpty]"
                      label=""
                      required
                    ></v-text-field>
                  </p>
                  <p>
                    D. Puntuación total de equilibrió (Suma de puntos)
                    <v-text-field
                      class="w-100-px"
                      dense
                      type="text"
                      v-model="pruebaArcosMiembrosInferiores.lastNames"
                      :rules="[validator.IsNullOrEmpty]"
                      label=""
                      required
                    ></v-text-field>
                  </p>
                  <p class="ml-4">Si NO se realizó la prueba.</p>
                  <p class="ml-4">
                    Indique el motivo que mejor refleja por qué el sujeto no
                    realizo las pruebas.
                  </p>
                  <p class="ml-4">
                    Anote el número en el espacio en blanco pertinent detrás de
                    la prueba NO REALIZADA
                  </p>
                  <p class="ml-4">* Lo intentó pero no fue capaz ... 1</p>
                  <p class="ml-4">
                    * El sujeto no pudo ponerse de pie sin ayuda ... 2
                  </p>
                  <p class="ml-4">
                    * No lo intentó, usted lo notaba inseguro ... 3
                  </p>
                  <p class="ml-4">
                    * No lo intentó el sujeto se sentía inseguro ... 4
                  </p>
                  <p class="ml-4">
                    * El sujeto no entendió las instrucciónes ... 5
                  </p>
                  <p class="ml-4">* Otro motivo (especifiquelo) ... 6</p>
                  <p class="ml-4">* El sujeto rechazó la prueba ... 7</p>
                  <p>
                    <v-textarea
                      outlined
                      no-resize
                      rows="5"
                      label="Comentarios"
                    ></v-textarea>
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-title class="primary--text justify-center">
                  Plan Analítico de Atención Integral de Terapia Física
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="2" class="font-weight-bold text-center"
                      >Objetivos</v-col
                    >
                    <v-col cols="2" class="font-weight-bold text-center"
                      >Hipotesis</v-col
                    >
                    <v-col cols="2" class="font-weight-bold text-center"
                      >Estructura Corporal</v-col
                    >
                    <v-col cols="2" class="font-weight-bold text-center"
                      >Función Corporal</v-col
                    >
                    <v-col cols="2" class="font-weight-bold text-center"
                      >Actividad</v-col
                    >
                    <v-col cols="2" class="font-weight-bold text-center"
                      >Participación</v-col
                    >
                  </v-row>
                  <v-row>
                    <v-col cols="2">
                      <v-textarea outlined no-resize rows="6"></v-textarea
                    ></v-col>
                    <v-col cols="2">
                      <v-textarea outlined no-resize rows="6"></v-textarea
                    ></v-col>
                    <v-col cols="2">
                      <v-textarea outlined no-resize rows="6"></v-textarea
                    ></v-col>
                    <v-col cols="2">
                      <v-textarea outlined no-resize rows="6"></v-textarea
                    ></v-col>
                    <v-col cols="2">
                      <v-textarea outlined no-resize rows="6"></v-textarea
                    ></v-col>
                    <v-col cols="2">
                      <v-textarea outlined no-resize rows="6"></v-textarea
                    ></v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-col cols="2" class="font-weight-bold text-center"
                        >Diagnóstico:
                      </v-col></v-col
                    >
                    <v-col cols="6">
                      <v-col cols="2" class="font-weight-bold text-center"
                        >Plan:
                      </v-col></v-col
                    >
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-textarea outlined no-resize rows="6"></v-textarea>
                    </v-col>
                    <v-col cols="6">
                      <v-textarea outlined no-resize rows="6"></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      DX. Fisioterapeutico:
                      <v-text-field
                        dense
                        type="text"
                        v-model="pruebaArcosMiembrosInferiores.lastNames"
                        :rules="[validator.IsNullOrEmpty]"
                        label=""
                        required
                      ></v-text-field>
                      Código CIF:
                      <v-text-field
                        dense
                        type="text"
                        v-model="pruebaArcosMiembrosInferiores.lastNames"
                        :rules="[validator.IsNullOrEmpty]"
                        label=""
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      Terapeuta
                      <v-text-field
                        dense
                        type="text"
                        v-model="pruebaArcosMiembrosInferiores.lastNames"
                        :rules="[validator.IsNullOrEmpty]"
                        label=""
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";
import { db } from "../../plugins/firebase";
export default {
  name: "AssessmentFormAnalyticalPlan",

  data() {
    return {
      isLoadingInfo: false,
      pruebaArcosMiembrosInferiores: {},
      isInfoDialogOpen: false,
    };
  },
  methods: {},
  computed: {
    ...mapState("responseTime", ["responseTimes"]),
    ...mapState("user", ["loggedUser"]),
    validator() {
      return validationHelper;
    },
  },
};
</script>
