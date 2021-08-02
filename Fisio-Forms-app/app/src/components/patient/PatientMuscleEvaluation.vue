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
          ><h3>Evaluación Muscular</h3>
          <v-icon
            color="info"
            class="ml-2 c-pointer"
            @click="isInfoDialogOpen = true"
          >
            mdi-information
          </v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-simple-table class="elevation-2">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left" colspan="2">Evaluación 1</th>
                  <th class="text-left" colspan="2">Evaluación 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Izquierda</td>
                  <td>Derecha</td>
                  <td>Izquierda</td>
                  <td>Derecha</td>
                </tr>
                <tr>
                  <td>Miembro Superior</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
                <tr>
                  <td>Miembro Inferior</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
                <tr>
                  <td>Tronco</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
                <tr>
                  <td>Cuello</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row no-gutters class="mb-4">
        <v-col cols="12" class="d-flex justify-center"
          ><h3>Evaluación Goniométrica</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-simple-table class="elevation-2">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left" colspan="2">Evaluación 1</th>
                  <th class="text-left" colspan="2">Evaluación 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Izquierda</td>
                  <td>Derecha</td>
                  <td>Izquierda</td>
                  <td>Derecha</td>
                </tr>
                <tr>
                  <td>Miembro Superior</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
                <tr>
                  <td>Miembro Inferior</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
                <tr>
                  <td>Tronco</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
                <tr>
                  <td>Cuello</td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                  <td>
                    <v-select :items="grades" label="Grado"></v-select>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="px-16">
            <v-card-title class="primary--text justify-center">
              Valoración
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" lg="6">
                  <v-textarea
                    outlined
                    no-resize
                    rows="5"
                    label="Nota Clínica - Valoración Inicial"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="3" lg="3">
                  <v-textarea
                    outlined
                    no-resize
                    rows="5"
                    label="Subjetivo"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="3" lg="3">
                  <v-textarea
                    outlined
                    no-resize
                    rows="5"
                    label="Subjetivo"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-textarea
                    outlined
                    no-resize
                    rows="5"
                    label="Análisis"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-textarea
                    outlined
                    no-resize
                    rows="5"
                    label="Plan de Acción"
                  ></v-textarea>
                </v-col> </v-row
            ></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-form>

    <v-dialog v-model="isInfoDialogOpen" width="500">
      <v-card>
        <v-card-title class="d-flex justify-end">
          <v-icon
            color="info"
            class="ml-2 c-pointer"
            @click="isInfoDialogOpen = false"
          >
            mdi-close
          </v-icon></v-card-title
        >
        <v-card-text class="px-3">
          <span class="primary--text font-weight-bold"
            >La fuerza del paciente está graduada en una escala de 0 - 5</span
          >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Grado</th>
                  <th class="text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                  <td>Fuerza muscular normal contra resistencia completa.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    La fuerza muscular está reducida pero la contracción
                    muscular puede realizar un movimiento articular contra
                    resistencia.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    La fuerza muscular está reducida tanto que el movimiento
                    articular solo puede realizarse contra la gravedad, sin la
                    resistencia del examinador. Por ejemplo, la articulación del
                    codo puede moverse desde extensión completa hasta flexión
                    completa, comenzando con el brazo suspendido al lado del
                    cuerpo
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Movimiento activo que no puede vencer la fuerza de gravedad.
                    Por ejemplo, el codo puede flexionarse completamente solo
                    cuando el brazo es mantenido en un plano horizontal
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Esbozo de contracción muscular</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>Ausencia de contracción muscular</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
      <span class="primary white--text"></span>
    </v-dialog>
  </v-container>
</template>
<script>
import validationHelper from "@/utils/validationHelper";
import { mapActions, mapState } from "vuex";
import { db } from "../../plugins/firebase";
export default {
  name: "PatientMuscleEvaluation",

  data() {
    return {
      isLoadingInfo: false,
      evaluacionMuscular: {},
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
