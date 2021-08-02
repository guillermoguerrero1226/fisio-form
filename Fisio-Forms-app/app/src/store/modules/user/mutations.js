import { MutationsHelper } from "../../helpers";

export default {
  setLoggedUser: MutationsHelper.set("loggedUser"),
  toggleDarkTheme: MutationsHelper.set("isDarkThemeEnabled"),
};
