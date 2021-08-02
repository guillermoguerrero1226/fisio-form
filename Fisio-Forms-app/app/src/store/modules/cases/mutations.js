import { MutationsHelper } from "@/store/helpers";

export default {
  setCases: MutationsHelper.set("cases"),
  setCurrentCase: MutationsHelper.set("currentCase"),
  addCases: MutationsHelper.pushTo("cases"),
  updateCase: MutationsHelper.replaceRecordInList("cases"),
};
