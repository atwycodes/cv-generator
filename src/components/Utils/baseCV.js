const baseCV = {
  general: {
    data: {
      generalName: "",
      generalEmail: "",
      generalPhoneNumber: "",
      generalLocation: "",
    },
  },

  work: [
    {
      id: crypto.randomUUID(),
      data: {
        workCompany: "",
        workPosition: "",
        workFrom: "",
        workTo: "",
      },
      scope: [],
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      data: {
        educationLocation: "",
        educationType: "",
        educationFrom: "",
        educationTo: "",
      },
    },
  ],
};

export default baseCV;
