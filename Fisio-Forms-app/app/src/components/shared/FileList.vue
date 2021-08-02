<template>
  <v-list dense subheader two-line>
    <v-subheader>Anexos ({{ documents.length }})</v-subheader>
    <v-list-item class="ma-0 pa-0" v-for="(document, i) in documents" :key="i">
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
</template>

<script>
export default {
  name: "FileList",
  props: {
    documents: {
      required: true,
      default: [],
    },
  },
  computed: {},
  data: () => ({}),
  methods: {
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
  async created() {},
};
</script>
