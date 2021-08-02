//
// axiosSettings
//

const defaultAuthorizationHeader = "";

const baseURL = process.env.VUE_APP_API_SERVICE_HOST || "";

const axiosSettings = {
  requestConfig: {
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  },
  defaultAuthorizationHeader,
};

//
// export
//

export { axiosSettings };
