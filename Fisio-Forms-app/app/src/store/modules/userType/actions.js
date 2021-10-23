import { UserTypeService } from "../../../services/userTypeService";

export default {
  async getAllUserTypes({ commit }) {
    const result = await UserTypeService.GetAllAsync();
    if (result) {
      commit("setUserTypes", result.docs);
    }
  },
};
