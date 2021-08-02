import { ResponseTimeService } from "../../../services/responseTimeService";

export default {
  async getAllResponseTimes({ state, commit }) {
    if (state?.responseTimes?.length == 0) {
      const result = await ResponseTimeService.GetAllAsync();
      const responseTimes = result.docs.map((rt) => {
        const responseTime = rt.data();
        responseTime.id = rt.id;
        responseTime.ref = rt.ref;
        return responseTime;
      });
      commit("setResponseTimes", responseTimes);
    }
  },
};
