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
      scope: [
        {
          id: crypto.randomUUID(),
          experience: "",
        },
      ],
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      data: {
        educationInstitution: "",
        educationType: "",
        educationGraduation: "",
      },
    },
  ],
};

export default baseCV;
