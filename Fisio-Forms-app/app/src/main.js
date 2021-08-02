//
// plugins/accessories/components/extensions
//

import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import FlagIcon from "vue-flag-icon";
import VuetifyDialog from "vuetify-dialog";
import cssVars from "css-vars-ponyfill";
import { VueMasonryPlugin } from "vue-masonry";
import VueMasonry from "vue-masonry-css";
import Dayjs from "vue-dayjs";
import Vue2Filters from "vue2-filters";
//
// styles(scss/sass/css) / fonts
//

import "vuetify-dialog/dist/vuetify-dialog.css";
import "@mdi/font/css/materialdesignicons.css";
import "roboto-fontface/css/roboto/sass/roboto-fontface.scss";
import "@/scss/app/index.scss";

cssVars({
  include: 'style,link[rel="stylesheet"]:not([href*="//"])',
  preserveVars: true,
  silent: true,
  onlyLegacy: true,
  watch: true,
});

//
// Vue setups
//

Vue.config.productionTip = false;
Vue.use(FlagIcon);
require("moment/locale/es");
const moment = require("moment");
require("moment/locale/es");

Vue.use(require("vue-moment"), {
  moment,
});
Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
});
Vue.use(VueMasonryPlugin);
Vue.use(VueMasonry);
Vue.use(Dayjs);
Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
