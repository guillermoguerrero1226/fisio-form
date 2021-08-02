import apiService from "./apiService.js";

//
// API Url
//

const URL = {
  GetSomeData: "ServiceManager/GetSomeData",
};

//
// API definition
//

export default {
  GetSomeDataAsync() {
    return apiService.get(URL.GetSomeData);
  },
};
