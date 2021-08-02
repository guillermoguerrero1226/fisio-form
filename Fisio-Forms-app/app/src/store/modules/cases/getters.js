export default {
  formatCases: () => (response) => {
    return response.map((c) => {
      const caseObject = c.data();
      caseObject.id = c.id;
      caseObject.ref = c.ref.path;
      return caseObject;
    });
  },
};
