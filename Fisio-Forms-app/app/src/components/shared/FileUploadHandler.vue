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
    <v-list dense subheader two-line>
      <v-subheader>Anexos ({{ documents.length }})</v-subheader>
      <v-list-item
        class="ma-0 pa-0"
        v-for="(document, i) in documents"
        :key="i"
      >
        <v-list-item-avatar>
          <v-icon class="primary" dark>mdi-clipboard-text</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="document.name"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-on="on"
                v-bind="attrs"
                @click="deleteDocument(document, i)"
              >
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </template>
            <span>Eliminar anexo</span>
          </v-tooltip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { storage, db } from "../../plugins/firebase";
import FilePicker from "@/components/shared/FilePicker";
import FileList from "@/components/shared/FileList";

export default {
  name: "FileUploadHandler",
  props: {
    documents: {
      required: true,
      default: [],
    },
  },
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
    onFilePicker(file) {
      this.caseObject.documents.push(file);
    },
    onFileDelete(documentInfo) {
      if (this.isNew) {
        this.caseObject.documents.splice(documentInfo.index, 1);
      }
    },
    async deleteDocument(document, index) {
      const isConfirm = await this.$dialog.confirm({
        text: `Esta seguro de eliminar el anexo ${document.name}`,
        title: "Eliminar Anexo",
        actions: {
          false: "Cancelar",
          true: "Eliminar",
        },
      });
      if (isConfirm) {
        this.$emit("file:delete", { document, index });
      }
    },
  },
};
</script>
