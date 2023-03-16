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
      id: crypto.randomUUID(), // <WorkForm/> no. 1
      data: {
        workCompany: "Turner",
        workPosition: "Civil Project Engineer",
        workFrom: "Nov 2021",
        workTo: "Nov 2022",
      },
      scope: [
        {
          id: crypto.randomUUID(),
          experience: "",
        },
      ],
    },
  ],
};

export default baseCV;
