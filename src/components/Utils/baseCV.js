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
        {
          id: crypto.randomUUID(),
          experience: "Assess Extension of Time (EOT) Claims by Contractor",
        },
      ],
    },
  ],

  education: [
    {
      id: crypto.randomUUID(),
      data: {
        educationInstitution: "Monash University Malaysia",
        educationType: "Bachelor's Degree (Hons.) in Civil Engineering",
        educationGraduation: "Dec 2019",
      },
    },
  ],
};

export default baseCV;
