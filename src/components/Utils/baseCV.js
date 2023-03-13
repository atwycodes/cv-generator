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
      id: crypto.randomUUID(), // <WorkForm/> no. 1
      data: {
        workCompany: "",
        workPosition: "",
        workFrom: "",
        workTo: "",
      },
    },
  ],
};

export default baseCV;
