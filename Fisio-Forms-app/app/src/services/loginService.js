import apiService from "./apiService.js";
const URL = {
  login: "login/",
};
export const LoginService = {
  LoginAsync(user, password) {
    return apiService.post(URL.login, { user, password });
  },
};
