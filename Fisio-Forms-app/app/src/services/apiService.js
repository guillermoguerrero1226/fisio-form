import axios from "axios";
import { axiosSettings } from "@/globalSettings";

const ServiceResponse = class ServiceResponse {
  constructor(response) {
    this.response = response;
    this.data = response.data;
    this.success = Boolean(response && response.data);
  }
};

const apiService = axios.create(axiosSettings.requestConfig);

apiService.interceptors.response.use(
  (response) => {
    let result = new ServiceResponse(response);
    return result;
  },
  (error) => {
    let result = new ServiceResponse(error);
    return result;
  }
);

apiService.defaults.headers.common["Authorization"] = localStorage.getItem(
  "token"
);

export default apiService;
