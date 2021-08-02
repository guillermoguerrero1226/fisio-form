<template>
  <div>
    <input
      type="file"
      v-show="false"
      ref="fileInput"
      @change="onFileSelected($event)"
    />
    <v-btn color="primary" dark @click="triggerFileInput">
      Subir Anexo
      <v-icon right dark> mdi-cloud-upload </v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "FilePicker",
  data: () => ({
    fileSelected: null,
  }),
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      this.$emit("file:add", event.target.files[0]);
      event.target.value = null;
    },
  },
};
</script>
