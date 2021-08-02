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
          ><h3>Prueba de Arcos de Movilidad para Miembros Superiores</h3>
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </td>
                          <td colspan="2">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
                              :rules="[validator.IsNullOrEmpty]"
                              label=""
                              required
                            ></v-text-field>
                          </th>
                          <th class="text-left">
                            <v-text-field
                              dense
                              type="text"
                              v-model="pruebaArcosMiembrosSuperiores.lastNames"
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
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";
import { db } from "../../plugins/firebase";
export default {
  name: "PatientUpperLimbArchesTest",

  data() {
    return {
      isLoadingInfo: false,
      pruebaArcosMiembrosSuperiores: {},
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
