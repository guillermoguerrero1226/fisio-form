export default {
  getUserTypes: (state) => {
    if (state.userTypes && state.userTypes.length > 0) {
      return state.userTypes.map((u) => {
        const userType = u.data();
        userType.id = u.id;
        return userType;
      });
    }
  },
};
