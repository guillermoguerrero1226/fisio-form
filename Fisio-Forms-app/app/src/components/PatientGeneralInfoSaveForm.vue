<template>
  <v-container
    fluid
    v-if="loadingGeneralUserInfo"
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
          ><h3>Información del Paciente</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Datos del Terapeuta
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    type="text"
                    v-model="patientGeneralInfo.terapeuta"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Terapeuta"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    type="text"
                    v-model="patientGeneralInfo.expediente"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Expediente"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-menu
                    v-model="fechaRegistroMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="patientGeneralInfo.fechaRegistro"
                        :rules="[validator.IsNullOrEmpty]"
                        label="Fecha"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        dense
                        required
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="patientGeneralInfo.fechaRegistro"
                      @input="fechaRegistroMenu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="8" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Antecedentes Patológicos y Heredofamiliares
            </v-card-title>
            <v-card-text>
              <v-row class="py-3">
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Diabetes"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.diabetesDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.rheumaticDiseases"
                    label="Enf. Reumáticas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.rheumaticDiseasesDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.allergy"
                    label="Alergia"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.allergyDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.encame"
                    label="Encames"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.encameDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.HTA"
                    label="HTA"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.HTADetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.accidents"
                    label="Accidentes"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.accidentsDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.cancer"
                    label="Cáncer"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.cancerDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.heartDisease"
                    label="Cardiopatías"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.heartDiseaseDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.transfusions"
                    label="Transfusiones"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.transfusionsDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.surgery"
                    label="Cirugías"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.surgeryDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.fracture"
                    label="Fracturas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.fractureDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.spasm"
                    label="Espasmos o Contractura Muscular"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.spasmDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Exploración Física
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.ethnicity"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Etnia"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.weight"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Peso"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.size"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Talla"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.height"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Estatura"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.imc"
                    :rules="[validator.IsNullOrEmpty]"
                    label="IMC"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.consultationReason"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Motivo de la Consulta"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Tratamientos Previos"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center" class="my-4">
                <v-divider class="secondary"></v-divider>
                <span class="mx-4 primary--text">Signos Vitales</span>
                <v-divider class="secondary"></v-divider>
              </v-row>
              <v-row>
                <v-col cols="6" md="4" lg="3">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.TA"
                    :rules="[validator.IsNullOrEmpty]"
                    label="T/A"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="3">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.Temperature"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Temp"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="3">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.FC"
                    :rules="[validator.IsNullOrEmpty]"
                    label="FC"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="3">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.FR"
                    :rules="[validator.IsNullOrEmpty]"
                    label="FR"
                    required
                  ></v-text-field>
                </v-col> </v-row
            ></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="8" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Habitos de Salud
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.smoking"
                    label="Tabaquismo"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.smokingDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.physicalActivity"
                    label="Actividad Física"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.physicalActivityDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.alcoholism"
                    label="Alcoholismo"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.alcoholismDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.selfMedication"
                    label="Se Automedica"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.selfMedicationDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.drugs"
                    label="Drogas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.drugsDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.hobby"
                    label="Pasatiempo"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    v-model="patientGeneralInfo.hobbyDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              En Mujeres: Estado de Ingravidez
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.isPregnant"
                    label="Esta embarazada"
                  ></v-checkbox>
                </v-col>
                <v-col cols="8">
                  <v-textarea
                    v-model="patientGeneralInfo.isPregnantDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.childrenNumber"
                    label="Cuantos hijos tiene"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="8" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Diagnóstico Médico en Rehabilitación
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.reflexes"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Reflejos"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.sensitivity"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Sensibilidad"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.language"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Lenguaje/Orientación"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.others"
                    label="Otros"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Cicatriz Quirúrgica
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="12" lg="12">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.site"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Sitio"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.isKeloid"
                    label="Queloide"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.isRetractable"
                    label="Retractil"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.isOpen"
                    label="Abierta"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.isWithAdherence"
                    label="Con Adherencia"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.isHypertrophic"
                    label="Hipertrófica"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="8" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Traslados
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.startValue"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Valor Inicial"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.startValueIndependent"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Independiente"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.startValueWheelchair"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Silla de Ruedas"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.startValueWithHelp"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Con Ayudas"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.startValueStretchers"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Camillas"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-divider class="secondary my-4"></v-divider>
              <v-row>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.endValue"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Valor Final"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.endValueIndependent"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Independiente"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.endValueWheelchair"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Silla de Ruedas"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.endValueWithHelp"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Con Ayudas"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.endValueStretchers"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Camillas"
                    required
                  ></v-text-field>
                </v-col> </v-row
            ></v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Marcha / Deambulación
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox dense label="Libre"></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.spastic"
                    label="Espásticas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.claudicant"
                    label="Claudicante"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.ataxic"
                    label="Atáxica"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.marchWithHelp"
                    label="Con Ayuda"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.marchOthers"
                    label="Otros"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                  <v-textarea
                    v-model="patientGeneralInfo.marchDetails"
                    outlined
                    no-resize
                    rows="2"
                    label="Observaciones"
                  ></v-textarea>
                </v-col> </v-row
            ></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" lg="12" align="center">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Escala del Dolor
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" class="d-flex justify-center">
                  <v-radio-group v-model="patientGeneralInfo.scalePain" row>
                    <v-radio label="1" value="1"></v-radio>
                    <v-radio label="2" value="2"></v-radio>
                    <v-radio label="3" value="3"></v-radio>
                    <v-radio label="4" value="4"></v-radio>
                    <v-radio label="5" value="5"></v-radio>
                    <v-radio label="6" value="6"></v-radio>
                    <v-radio label="7" value="7"></v-radio>
                    <v-radio label="8" value="8"></v-radio>
                    <v-radio label="9" value="9"></v-radio>
                    <v-radio label="10" value="10"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            @click="saveUserGeneralInfo(false)"
            color="primary"
            class="mx-2"
            >Guardar</v-btn
          >
          <v-btn
            outlined
            @click="saveUserGeneralInfo(true)"
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
import { db } from "../plugins/firebase";
export default {
  name: "PatientGeneralInfoSaveForm",
  components: {},
  data: () => {
    return {
      patientGeneralInfo: {},
      fechaRegistroMenu: false,
      isSaving: false,
      currentId: null,
      loadingGeneralUserInfo: false,
      uploadValue: 0,
    };
  },
  methods: {
    ...mapActions("patient", ["saveGeneralInfo", "getGeneralInfo"]),
    async saveUserGeneralInfo(nextPage) {
      const generalInfoPayload = {
        generalInfo: this.patientGeneralInfo,
        id: this.currentPatient.documentNumber,
      };
      const res = await this.saveGeneralInfo(generalInfoPayload);
      this.$dialog.notify.success("El case ha sido creado exitosamente", {
        position: "top-right",
        timeout: 5000,
      });
      if (nextPage) {
        debugger;
        this.$emit("nextPage", false);
      }
    },
  },
  computed: {
    ...mapState("user", ["loggedUser"]),
    ...mapState("patient", ["currentPatient"]),
    validator() {
      return validationHelper;
    },
    db() {
      return db;
    },
  },
  async created() {
    this.loadingGeneralUserInfo = true;
    await this.getGeneralInfo(this.currentPatient.documentNumber);
    this.patientGeneralInfo = this.currentPatient.generalInfo || {};
    this.loadingGeneralUserInfo = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
