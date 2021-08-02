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
        <v-col cols="12" md="6" lg="8">
          <v-card class="h-100-per">
            <v-card-title class="primary--text justify-center">
              Datos del Paciente
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.names"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Nombres"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.lastNames"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Apellidos"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.gender"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Sexo"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.age"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Edad"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.address"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Domicilio"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="number"
                    v-model="patientGeneralInfo.phoneNumber"
                    :rules="[validator.IsValidNumber]"
                    label="Teléfono"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.email"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.maritalStatus"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Estado civil"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.schoolGrade"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Escolaridad"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.job"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Ocupación"
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
              Datos del Terapeuta
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.therapist"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Terapeuta"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.record"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Expediente"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.recordDate"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Fecha"
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
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Enf. Reumáticas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Alergia"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Encames"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="HTA"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Accidentes"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Cáncer"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Cardiopatías"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Transfusiones"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Cirugías"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Fracturas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Espasmos o Contractura Muscular"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.diabetes"
                    label="Tabaquismo"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Actividad Física"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Alcoholismo"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Se Automedica"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Drogas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
                    outlined
                    no-resize
                    rows="2"
                    label="Especifique"
                  ></v-textarea>
                </v-col>
                <v-col cols="6" md="6" lg="2">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Pasatiempo"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-textarea
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
                    v-model="patientGeneralInfo.diabetes"
                    label="Esta embarazada"
                  ></v-checkbox>
                </v-col>
                <v-col cols="8">
                  <v-textarea
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
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
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
                <v-col cols="6" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Sitio"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Queloide"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Retractil"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Abierta"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Con Adherencia"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6" md="4" lg="4">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
                    :rules="[validator.IsNullOrEmpty]"
                    label="Hipertrófica"
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
              Translados
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6" md="6" lg="2">
                  <v-text-field
                    dense
                    outlined
                    type="text"
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                    v-model="patientGeneralInfo.previousTreatments"
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
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Libre"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Espásticas"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Claudicante"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Atáxica"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Con Ayuda"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" md="6" lg="4">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="Otros"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                  <v-textarea
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
                <v-col
                  cols="2"
                  md="1"
                  lg="1"
                  offset-sm="2"
                  offset-md="1"
                  offset-lg="1"
                >
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="1"
                  ></v-checkbox
                ></v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="2"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="3"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="4"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="5"
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="2"
                  md="1"
                  lg="1"
                  offset-sm="2"
                  offset-md="0"
                  offset-lg="0"
                >
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="6"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="7"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="8"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="9"
                  ></v-checkbox>
                </v-col>
                <v-col cols="2" md="1" lg="1">
                  <v-checkbox
                    dense
                    v-model="patientGeneralInfo.diabetes"
                    label="10"
                  ></v-checkbox
                ></v-col>
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
import { db } from "../plugins/firebase";
export default {
  name: "PatientGeneralInfoSaveForm",
  components: {},
  data: () => {
    return {
      patientGeneralInfo: {},
      isSaving: false,
      currentId: null,
      loadingGeneralUserInfo: false,
      uploadValue: 0,
    };
  },
  methods: {
    ...mapActions("cases", ["saveCaseAsync", "getByIdAsync", "updateAsync"]),
    ...mapActions("responseTime", ["getAllResponseTimes"]),
  },
  async save() {
    if (this.$refs.form.validate()) {
      this.patientGeneralInfo.createdBy = db.doc(`users/${this.loggedUser.id}`);
      this.patientGeneralInfo.lastModifiedBy = db.doc(
        `users/${this.loggedUser.id}`
      );
      this.patientGeneralInfo.createdOn = new Date();
      this.patientGeneralInfo.lastModifiedOn = new Date();
      await this.saveCaseAsync(this.caseObject);
      this.$dialog.notify.success("El case ha sido creado exitosamente", {
        position: "top-right",
        timeout: 5000,
      });
    }
  },
  computed: {
    ...mapState("responseTime", ["responseTimes"]),
    ...mapState("user", ["loggedUser"]),
    validator() {
      return validationHelper;
    },
  },
  async created() {
    this.loadingGeneralUserInfo = true;
    await this.getAllResponseTimes();
    this.loadingGeneralUserInfo = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
