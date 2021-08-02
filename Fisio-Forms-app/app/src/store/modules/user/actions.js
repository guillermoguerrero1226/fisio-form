import apiService from "../../../services/apiService.js";
export default {
  setLoggedUser({ commit }, user) {
    apiService.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.token}`;
    localStorage.setItem("token", `Bearer ${user.token}`);
    commit("setLoggedUser", user);
  },
  toggleDarkTheme({ commit }, value) {
    commit("toggleDarkTheme", value);
  },
  logoutUser({ commit }) {
    commit("setLoggedUser", {});
  },
};
