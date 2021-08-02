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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosInferiores.lastNames"
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
    </v-form>
  </v-container>
</template>
<script>
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";
import { db } from "../../plugins/firebase";
export default {
  name: "PatientLowerLimbArchesTest",

  data() {
    return {
      isLoadingInfo: false,
      pruebaArcosMiembrosInferiores: {},
      isInfoDialogOpen: false,
      grades: [
        "Grado 0",
        "Grado 1",
        "Grado 2",
        "Grado 3",
        "Grado 4",
        "Grado 5",
      ],
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
