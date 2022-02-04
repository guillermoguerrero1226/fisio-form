<template>
  <v-container
    fluid
    v-if="isLoadingUpperLimpEvaluationInfo"
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
            Evaluación Goniométrica - Prueba de Arcos de Movilidad para Miembros
            Superiores
          </h3>
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
                  <v-img src="../../assets/images/arc_test_left.png"></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Hombro</th>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Hombro</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <td colspan="2">Flexión</td>
                          <td colspan="2">Extensión</td>
                          <th class="text-left"></th>
                          <td colspan="2">ABD</td>
                          <td colspan="2">ADD</td>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderFlex1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderExt1"
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
                              v-model="upperLimbTest.shoulderABD1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderADD1"
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
                              v-model="upperLimbTest.shoulderFlex2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderExt2"
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
                              v-model="upperLimbTest.shoulderABD2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderADD2"
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
                              v-model="upperLimbTest.shoulderFlex3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderExt3"
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
                              v-model="upperLimbTest.shoulderABD3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderADD3"
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
                              v-model="upperLimbTest.shoulderFlex4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderExt4"
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
                              v-model="upperLimbTest.shoulderABD4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.shoulderADD4"
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
                  <v-img src="../../assets/images/arc_test_rigth.png"></v-img>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="upperLimbTest.shoulderObs"
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
                  <v-img src="../../assets/images/arc_test_left_2.png"></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Rotación</th>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Codo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <td colspan="2">Flexión</td>
                          <td colspan="2">Extensión</td>
                          <th class="text-left"></th>
                          <td colspan="2">ABD</td>
                          <td colspan="2">ADD</td>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.rotationFlex1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.rotationExt1"
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
                              v-model="upperLimbTest.elbowABD1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.elbowADD1"
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
                              v-model="upperLimbTest.rotationFlex2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.rotationExt2"
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
                              v-model="upperLimbTest.elbowABD2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.elbowADD2"
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
                              v-model="upperLimbTest.rotationFlex3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.rotationExt3"
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
                              v-model="upperLimbTest.elbowABD3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.elbowADD3"
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
                              v-model="upperLimbTest.rotationFlex4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.rotationExt4"
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
                              v-model="upperLimbTest.elbowABD4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.elbowADD4"
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
                  <v-img src="../../assets/images/arc_test_rigth_2.png"></v-img>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="upperLimbTest.rotElbowObs"
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
                  <v-img src="../../assets/images/arc_test_left_3.png"></v-img>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-simple-table class="transparent">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Antebrazo</th>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="4">Desviación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <td colspan="2">Flexión</td>
                          <td colspan="2">Extensión</td>
                          <th class="text-left"></th>
                          <td colspan="2">ABD</td>
                          <td colspan="2">ADD</td>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.antFlex1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.antExt1"
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
                              v-model="upperLimbTest.DesABD1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.DesADD1"
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
                              v-model="upperLimbTest.antFlex2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.antExt2"
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
                              v-model="upperLimbTest.DesABD2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.DesADD2"
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
                              v-model="upperLimbTest.antFlex3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.antExt3"
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
                              v-model="upperLimbTest.DesABD3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.DesADD3"
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
                              v-model="upperLimbTest.antFlex4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.antExt4"
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
                              v-model="upperLimbTest.DesABD4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.DesADD4"
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
                    v-model="upperLimbTest.antDesObs"
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
                  <v-img src="../../assets/images/arc_test_4.png"></v-img>
                </v-col>
                <v-col cols="12" md="9" lg="9">
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left" colspan="2">Reflexión</th>
                          <th class="text-left">Dedos</th>
                          <th class="text-left">MCF</th>
                          <th class="text-left">IFP</th>
                          <th class="text-left">IFD</th>
                          <th class="text-left">ABD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th class="text-left"></th>
                          <th class="text-left">Palmar</th>
                          <th class="text-left">Dorsal</th>
                          <th class="text-left">Índice</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerInMCF"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerInIFP"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerInIFD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerInABD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-left">1</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.palmar1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.dorsal1"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">Medio</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeMCF"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeIFP"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeIFD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeABD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-left">2</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.palmar2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.dorsal2"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">Anular</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerAnMCF"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerAnIFP"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerAnIFD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerAnABD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-left">3</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.palmar3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.dorsal3"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">Meñique</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeqMCF"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeqIFP"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeqIFD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerMeqABD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                        </tr>
                        <tr>
                          <th class="text-left">4</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.palmar4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.dorsal4"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">Pulgar</th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerPulMCF"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerPulIFP"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerPulIFD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="upperLimbTest.fingerPulABD"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="upperLimbTest.ReDedosObs"
                    outlined
                    no-resize
                    rows="3"
                    label="Observaciones"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            outlined
            @click="saveUpperLimpEvaluationInfo(true)"
            color="primary black--text"
          >
            Guardar y Anterior
          </v-btn>
          <v-btn
            @click="saveUpperLimpEvaluationInfo(undefined)"
            color="primary"
            class="mx-2"
            >Guardar</v-btn
          >
          <v-btn
            outlined
            @click="saveUpperLimpEvaluationInfo(false)"
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
  name: "PatientUpperLimbArchesTest",

  data() {
    return {
      isLoadingUpperLimpEvaluationInfo: false,
      upperLimbTest: {},
    };
  },
  methods: {
    ...mapActions("patient", [
      "saveUpperLimpEvaluation",
      "getUpperLimpEvaluation",
    ]),
    async saveUpperLimpEvaluationInfo(isBack) {
      const upperLimpEvaluationPayload = {
        upperLimpEvaluation: this.upperLimbTest,
        id: this.currentPatient.documentNumber,
      };
      const res = await this.saveUpperLimpEvaluation(
        upperLimpEvaluationPayload
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
    this.isLoadingUpperLimpEvaluationInfo = true;
    await this.getUpperLimpEvaluation(this.currentPatient.documentNumber);
    this.upperLimbTest = this.currentPatient.upperLimpEvaluation || {};
    this.isLoadingUpperLimpEvaluationInfo = false;
  },
};
</script>
