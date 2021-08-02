import { CaseService } from "../../../services/caseService";

export default {
  async getAllCases({ commit }) {
    let cases = [];
    const result = await CaseService.GetAllAsync();
    if (result && result.docs.length > 0) {
      for (let i = 0; i < result.docs.length; i++) {
        const c = result.docs[i];
        const caseObject = c.data();
        caseObject.id = c.id;
        caseObject.ref = c.ref.path;
        const user = await caseObject.createdBy.get();
        const responseTime = await caseObject.responseTime.get();
        caseObject.responseTimeObject = responseTime.data();
        caseObject.createdbyUser = user.data();
        caseObject.radicatedOn = caseObject.radicatedOn.toDate();
        cases.push(caseObject);
      }
      commit("setCases", cases);
    }
  },
  async saveCaseAsync({ commit }, caseObject) {
    const result = await CaseService.SaveAsync(caseObject);
    debugger;
    if (result) {
      caseObject.id = result.id;
      commit("setCurrentCase", caseObject);
    }
    return result;
  },
  async getByIdAsync({ commit }, id) {
    const result = await EventService.GetByIdAsync(id);
    if (result) {
      return result.data;
    }
  },
  async updateAsync({ commit }, event) {
    const result = await EventService.UpdateAsync(event.id, event);
    if (result) {
      commit("updateEvent", result.data);
    }
    return result;
  },
};
