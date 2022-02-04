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
          ><h3>Análisis de la Marcha</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="12" md="12" lg="12">
              <v-img
                contain
                class="v-responsive"
                src="../../assets/images/gait_analysis.png"
              ></v-img>
            </v-col>
          </v-row>
          <v-card>
            <v-card-title class="primary--text justify-center">
              Valoración
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="12" lg="12">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td class="text-left primary--text">
                            INICIO DE LA MARCHA (inmediatamente después de decir
                            "camine")
                          </td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>
                            Duda o vacila o múltiples intentos para comenzar
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>No vacilante</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left primary--text">
                            LONGITUD Y ALTURA DEL PASO
                          </td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>
                            El pie derecho no sobrepasa al izquierdo con el paso
                            en la fase balanceo
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El pie derecho no sobrepasa al izquierdo con el paso
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El pie derecho no se levanta completamente del suelo
                            con el paso en la fase de balanceo
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q5"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>El pie derecho se levanta completamente</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q6"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El pie izquierdo no sobrepasa el derecho con el paso
                            en la fase de balanceo
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q7"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El pie izquierdo sobrepasa al derecho con el paso
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q8"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El pie izquierdo no se levanta completamente del
                            suelo con el paso en la fase balanceo
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q9"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>El pie izquierdo se levanta completamente</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q10"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left primary--text">
                            SIMETRIA DEL PASO
                          </td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>
                            La longitud del paso con el pie derecho e izquierdo
                            es diferente(estimada)
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q11"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Los pasos son iguales de longitud</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q12"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left primary--text">
                            CONTINUIDAD DE LOS PASOS
                          </td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>Para, o hay discontinuidad entre los pasos</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q13"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Los pasos son continuos</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q14"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left primary--text">
                            TRAYECTORIA (Estimada en relación a las baldosas del
                            suelo de 30CM; se observa la desviación en 3 mts de
                            distancia)
                          </td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>Marcada desciación</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Desviación moderada, media o utiliza ayudas</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q15"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Derecho sin utilizar ayudas</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q16"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left primary--text">TRONCO</td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>Marcado balanceo o utiliza ayudas</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q17"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            No balanceo pero hay reflexión de rodillas, espalda
                            o extención hacia afuera de los brazos
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q18"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            No balanceo ni flexión, y tampoco utiliza ayudas
                          </td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q19"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="text-left primary--text">
                            POSTURA EN LA MARCHA
                          </td>
                          <td class="text-left"></td>
                        </tr>
                        <tr>
                          <td>Talones separados</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q20"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Talones casí se tocan mientras camina</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q21"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left"></th>
                        </tr>
                        <tr>
                          <td class="primary--text">TOTAL MARCHA</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q22"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="primary--text">TOTAL</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q23"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td class="primary--text">TOTAL GENERAL</td>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="gaitAnalysis.q24"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            outlined
            @click="saveGaitAnalysisInfo(true)"
            color="primary black--text"
          >
            Guardar y Anterior
          </v-btn>
          <v-btn
            @click="saveGaitAnalysisInfo(undefined)"
            color="primary"
            class="mx-2"
            >Guardar</v-btn
          >
          <v-btn
            outlined
            @click="saveGaitAnalysisInfo(false)"
            color="primary text--black"
          >
            Guardar y Siguiente
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";
export default {
  name: "PatientGaitAnalysis",

  data() {
    return {
      isLoadingInfo: false,
      gaitAnalysis: {},
    };
  },
  methods: {
    ...mapActions("patient", ["saveGaitAnalysis", "getGaitAnalysis"]),
    async saveGaitAnalysisInfo(isBack) {
      const gaitAnalysisPayload = {
        gaitAnalysis: this.gaitAnalysis,
        id: this.currentPatient.documentNumber,
      };
      const res = await this.saveGaitAnalysis(gaitAnalysisPayload);
      this.$dialog.notify.success(
        "El Anaisis de Marcha se ha guardado exitosamente",
        {
          position: "top-right",
          timeout: 5000,
        }
      );
      if (isBack !== undefined) {
        this.$emit("nextPage", isBack);
      }
    },
  },
  computed: {
    ...mapState("user", ["loggedUser"]),
    ...mapState("patient", ["currentPatient"]),
    validator() {
      return validationHelper;
    },
  },
  async created() {
    this.isLoadingInfo = true;
    await this.getGaitAnalysis(this.currentPatient.documentNumber);
    this.gaitAnalysis = this.currentPatient.gaitAnalysis || {};
    this.isLoadingInfo = false;
  },
};
</script>
