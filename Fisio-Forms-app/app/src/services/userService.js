import apiService from "./apiService.js";
const URL = {
  Create: "usuarios/",
};
export const UserService = {
  CreateAsync(user) {
    return apiService.post(URL.Create, user);
  },
};
