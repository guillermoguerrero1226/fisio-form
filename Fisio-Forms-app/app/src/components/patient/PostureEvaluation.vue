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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td class="px-1">
                            <v-text-field
                              dense
                              type="text"
                              v-model="evaluacionPostura.lastNames"
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
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";
import { db } from "../../plugins/firebase";
export default {
  name: "PostureEvaluation",

  data() {
    return {
      isLoadingInfo: false,
      evaluacionPostura: {},
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
