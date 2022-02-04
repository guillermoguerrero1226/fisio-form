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
          ><h3>Evaluación en la Postura</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="primary--text justify-center">
              Vista Frontal
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="8" lg="8">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">(Alineación Corporal)</th>
                          <th class="text-center" colspan="3">Grados</th>
                          <th class="text-left">Observaciones</th>
                        </tr>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left">L</th>
                          <th class="text-left">M</th>
                          <th class="text-left">S</th>
                          <th class="text-left"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Inclinación Lateral de la Cabeza</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq1l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq1m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq1a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq1Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Cabeza Rotada</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq2l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq2m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq2a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq2Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Asimetría Maxilar</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq3l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq3m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq3a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq3Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Clavículas Asímetricas</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq4l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq4m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq4a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq4Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Hombro Caído</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq5l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq5m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq5a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq5Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Hombro Elevado</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq6l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq6m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq6a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq6Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Cubito Valgo</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq7l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vf7m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq7a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq7Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Cubito Varo</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq8l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq8m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq8a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq8Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Rotación Interna de Cadera</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq9l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq9m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq9a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq9Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Rotación Externa de Cadera</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq10l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq10m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq10a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq10Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Genu Varum</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq11l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq11m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq11a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq11Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Genu Valgum</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq12l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq12m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq12a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq12Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Torsión Tibial Interna</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq13l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq13m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq13a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq13Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Torsión Tibial Externa</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq14l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq14m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq14a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq14Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Hallux Valgus</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq15l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq15m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq15a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq15Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Dedos en Garra</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq16l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq16m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq16a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq16Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Dedos en Martillo</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq17l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq17m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq17a"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vfq17Obs"
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
                <v-col cols="12" md="4" lg="4" class="d-flex align-center">
                  <v-img
                    src="../../assets/images/posture_eval_front.png"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="primary--text justify-center">
              Vista Lateral
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="8" lg="8">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">(Alineación Corporal)</th>
                          <th class="text-center" colspan="3">Grados</th>
                          <th class="text-left">Observaciones</th>
                        </tr>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left">L</th>
                          <th class="text-left">M</th>
                          <th class="text-left">S</th>
                          <th class="text-left"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Desplazamiento Anterior del Cuerpo</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq0l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq0m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq0s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq0Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Desplazamiento Posterior del Cuerpo</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq1l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq1m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq1s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq1bs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Cabeza Adelantada</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq2l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq2m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq2s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq2bs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Vertebras Torácicas: Cifosis</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq3l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq3m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq3s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq3Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Vertebras Torácicas: Pectus Excavatum</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq4l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq4m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq4s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq4bs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Pecho en Tonel</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq5l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq5m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq5s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq5bs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Pectus Carinatum</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq6l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq6m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq6s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq6bs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Columna: Lordosis</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq7l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq7m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq7s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq7Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Espalda Cifotica (Columna)</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq8l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq8m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq8s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq8Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Espalda Plana (Columna)</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq9l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq9m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq9s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq9Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Inclinación Ant. de Pelvis y Cadera</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq10l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq10m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq10s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq10Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Inclinación Post. de Pelvis y Cadera</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq11l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq11m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq11s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq11Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Genu Recurvatum</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq12l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq12m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq12s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq12Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Rodillas Flexionadas</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq13l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq13m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq13s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vlq13Obs"
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
                <v-col cols="12" md="4" lg="4" class="d-flex align-center">
                  <v-img
                    src="../../assets/images/posture_eval_side.png"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="primary--text justify-center">
              Vista Posterior
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="8" lg="8">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">(Alineación Corporal)</th>
                          <th class="text-center" colspan="3">Grados</th>
                          <th class="text-left">Observaciones</th>
                        </tr>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left">L</th>
                          <th class="text-left">M</th>
                          <th class="text-left">S</th>
                          <th class="text-left"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Cabeza Inclinada</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq1l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq1m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq1s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq1Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Cabeza Rotada</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq2l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq2m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq2s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq2Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Hombro Caído</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq3l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq3m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq3s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq3Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Hombro Elevado</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq4l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq4m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq4s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq4Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Espalda Plana</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq5l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq5m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq5s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq5Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Abducción de Escapulas</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq6l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq6m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq6s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq6Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Aducción de Escapulas</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq7l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq7m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq7s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq7Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Escapulas Aladas</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq8l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq8m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq8s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq8Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Curvatura Lateral de la Columna</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq9l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq9m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq9s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq9Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Rotación Interna de Cadera (Tronco)</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq10l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq10m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq10s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq10Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Rotación Externa de Cadera</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq11l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq11m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq11s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq11Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Inclinación Lateral de la Pelvis</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq12l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq12m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq12s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq12Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Rotación Pelvica</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq13l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq13m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq13s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq13Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Cadera Abducida</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq14l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq14m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq14s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq14Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Pie Pronado</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq15l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq15m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq15s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq15Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Pie Supinado</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq16l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq16m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq16s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq16Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Pie Plano</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq17l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq17m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq17s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq17Obs"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <td>Pie Cavo</td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq18l"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq18m"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq18s"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="postureEvaluation.vpq18Obs"
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
                <v-col cols="12" md="4" lg="4" class="d-flex align-center">
                  <v-img
                    src="../../assets/images/posture_eval_back.png"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            outlined
            @click="savePostureEvaluationInfo(true)"
            color="primary black--text"
          >
            Guardar y Anterior
          </v-btn>
          <v-btn
            @click="savePostureEvaluationInfo(undefined)"
            color="primary"
            class="mx-2"
            >Guardar</v-btn
          >
          <v-btn
            outlined
            @click="savePostureEvaluationInfo(false)"
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
  name: "PostureEvaluation",
  data() {
    return {
      isLoadingInfo: false,
      postureEvaluation: {},
      isInfoDialogOpen: false,
    };
  },
  methods: {
    ...mapActions("patient", ["savePostureEvaluation", "getPostureEvaluation"]),
    async savePostureEvaluationInfo(isBack) {
      const postureEvaluationPayload = {
        postureEvaluation: this.postureEvaluation,
        id: this.currentPatient.documentNumber,
      };
      const res = await this.savePostureEvaluation(postureEvaluationPayload);
      this.$dialog.notify.success(
        "La Evaluacion de Postura se ha guardado exitosamente",
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
    await this.getPostureEvaluation(this.currentPatient.documentNumber);
    this.postureEvaluation = this.currentPatient.postureEvaluation || {};
    this.isLoadingInfo = false;
  },
};
</script>
