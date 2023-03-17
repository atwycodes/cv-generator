const baseCV = {
  general: {
    data: {
      generalName: "Andrew Tan",
      generalEmail: "andrewwytan@gmail.com",
      generalPhoneNumber: "012 ---",
      generalLocation: "Shah Alam, Malaysia",
    },
  },

  work: [
    {
      id: crypto.randomUUID(),
      data: {
        workCompany: "Turner",
        workPosition: "Civil Project Engineer",
        workFrom: "Nov 2021",
        workTo: "Nov 2022",
      },
      scope: [
        {
          id: crypto.randomUUID(),
          experience: "Chair Progress Meetings",
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
