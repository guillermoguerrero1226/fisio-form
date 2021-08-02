import apiService from "./apiService.js";
const BASE_URL = "eventos/";
const URL = {
  GetAll: "eventos/",
};
export const EventService = {
  GetAllAsync() {
    return apiService.get(BASE_URL);
  },
  GetByIdAsync(id) {
    return apiService.get(`${BASE_URL}${id}`);
  },
  CreateAsync(event) {
    return apiService.post(BASE_URL, event);
  },
  UpdateAsync(id, event) {
    return apiService.put(`${BASE_URL}${id}`, event);
  },
};
