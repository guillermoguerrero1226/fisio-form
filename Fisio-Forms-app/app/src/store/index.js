import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import {
  cases,
  userType,
  ticket,
  user,
  responseTime,
  patient,
} from "./modules";

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage,
  modules: ["user", "patient"],
  key: "RevisorState",
});
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    version: Object.freeze("0.0.1"),
    isDarkThemeEnabled: false,
  },
  modules: {
    cases,
    userType,
    ticket,
    user,
    responseTime,
    patient,
  },
});
