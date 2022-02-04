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
          ><h3>Prueba de Arcos de Movilidad para Miembros Inferiores</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Movimientos
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_left.png"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left">Flexión Cadera c/rod. Ext.</th>
                          <th class="text-left"></th>
                          <th class="text-left">Extención de Cadera</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left">1</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaFlex1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">1</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaExt1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">2</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaFlex2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">2</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaExt2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">3</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaFlex3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">3</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaExt3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">4</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaFlex4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">4</th>
                          <td>
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaExt4"
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
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_rigth.png"
                  ></v-img>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="lowerLimbTest.caderaObs"
                    outlined
                    no-resize
                    rows="3"
                    label="Observaciones"
                  ></v-textarea> </v-col
              ></v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Movimientos
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_left_2.png"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">
                            Flexión Cadera c/rod. Ext.
                          </th>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Rodilla</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <td colspan="4"></td>
                          <th class="text-left"></th>
                          <td colspan="2">Flex.</td>
                          <td colspan="2">Ext.</td>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <td colspan="4">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.cadera1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodFlex1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodExt1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">2</th>
                          <td colspan="4">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.cadera2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">2</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodFlex2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodExt2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">3</th>
                          <td colspan="4">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.cadera3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">3</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodFlex3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodExt3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">4</th>
                          <td colspan="4">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.cadera4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">4</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodFlex4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rodExt4"
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
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_rigth_2.png"
                  ></v-img>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="lowerLimbTest.cadRodObs"
                    outlined
                    no-resize
                    rows="3"
                    label="Observaciones"
                  ></v-textarea> </v-col
              ></v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Movimientos
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_left_3.png"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Cadera</th>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Flexión</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <td colspan="2">ABD.</td>
                          <td colspan="2">ADD.</td>
                          <th class="text-left"></th>
                          <td colspan="2">Plant.</td>
                          <td colspan="2">Dors.</td>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaABD1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaADD1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexPant1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexDor1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">2</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaABD2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaADD2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">2</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexPant2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexDor2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">3</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaABD3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaADD3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">3</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexPant3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexDor3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">4</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaABD4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.caderaADD4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">4</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexPant4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.flexDor4"
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
                <v-col cols="12" md="3" lg="3">
                  <v-img src="../../assets/images/arc_test_rigth_3.png"></v-img>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="lowerLimbTest.caderaFlexObs"
                    outlined
                    no-resize
                    rows="3"
                    label="Observaciones"
                  ></v-textarea> </v-col
              ></v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Movimientos
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_left_4.png"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Rotación</th>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Tobillo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <td colspan="2">EXT.</td>
                          <td colspan="2">INT.</td>
                          <th class="text-left"></th>
                          <td colspan="2">INV.</td>
                          <td colspan="2">EVE.</td>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotExt1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotInt1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobINV1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobEVE1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">2</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotEx2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotInt2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">2</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobINV2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobEVE2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">3</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotExt3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotInt3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">3</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobINV3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobEVE3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">4</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotExt4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.rotInt4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobINV4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="lowerLimbTest.tobEVE4"
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
                <v-col cols="12" md="3" lg="3">
                  <v-img
                    src="../../assets/images/arc_test_lower_rigth_4.png"
                  ></v-img>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="lowerLimbTest.rotTobObs"
                    outlined
                    no-resize
                    rows="3"
                    label="Observaciones"
                  ></v-textarea> </v-col
              ></v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            outlined
            @click="saveLowerLimpEvaluationInfo(true)"
            color="primary black--text"
          >
            Guardar y Anterior
          </v-btn>
          <v-btn
            @click="saveLowerLimpEvaluationInfo(undefined)"
            color="primary"
            class="mx-2"
            >Guardar</v-btn
          >
          <v-btn
            outlined
            @click="saveLowerLimpEvaluationInfo(false)"
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
  name: "PatientLowerLimbArchesTest",

  data() {
    return {
      isLoadingInfo: false,
      lowerLimbTest: {},
    };
  },
  methods: {
    ...mapActions("patient", [
      "saveLowerLimpEvaluation",
      "getLowerLimpEvaluation",
    ]),
    async saveLowerLimpEvaluationInfo(isBack) {
      const lowerLimpEvaluationPayload = {
        lowerLimpEvaluation: this.lowerLimbTest,
        id: this.currentPatient.documentNumber,
      };
      const res = await this.saveLowerLimpEvaluation(
        lowerLimpEvaluationPayload
      );
      this.$dialog.notify.success(
        "La Evaluación Goniométrica se ha guardado exitosamente",
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
    await this.getLowerLimpEvaluation(this.currentPatient.documentNumber);
    this.lowerLimbTest = this.currentPatient.lowerLimpEvaluation || {};
    this.isLoadingInfo = false;
  },
};
</script>
