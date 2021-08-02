import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: "#40C4FF ",
        secondary: "#E5E5E5 ",
        accent: "#E0E0E0",
        error: "#D90C0C",
        info: "#0565B7",
        success: "#4A9A4A",
        warning: "#FFAC33",
        background: "#fAfAfA",
      },
      dark: {
        primary: "#424242",
        secondary: "#6a6a6a",
        accent: "#414141",
        error: "#D90C0C",
        info: "#0565B7",
        success: "#4A9A4A",
        warning: "#FFAC33",
        background: "#151515",
      },
    },
  },
});
