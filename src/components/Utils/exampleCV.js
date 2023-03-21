const exampleCV = {
  general: {
    data: {
      generalName: "Andrew Tan Wen Yan",
      generalEmail: "andrewwytan@gmail.com",
      generalPhoneNumber: "+6012 515 8462",
      generalLocation: "Shah Alam, Malaysia",
    },
  },

  work: [
    {
      id: crypto.randomUUID(),
      data: {
        workCompany: "Turner Construction Company",
        workPosition: "Civil Project Engineer (Project Management Office)",
        workFrom: "Nov 2021",
        workTo: "Nov 2022",
      },
      scope: [
        {
          id: crypto.randomUUID(),
          experience:
            "Package Manager for TNB HQ Campus access bridge works (MYR 24M valuation)",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Nominated LEAN Coordinator for the project. Implemented LEAN processes (Last Planner System, Pull Planning) that yielded 17% reduction in planned works duration",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Prepare and monitor weekly work schedules for main contractor's use and reference",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Oversee overall project progress and relay concise briefings to high-level client-side management",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Facilitate discussions and meetings between project stakeholders to identify project pain points and solutions",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Assess Extension of Time (EOT) Claims by Contractor in accordance with PAM 2006 conditions of contract",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Chair weekly site progress meetings between client, consultants and contractors",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      data: {
        workCompany: "Wilmar International",
        workPosition: "Management Trainee (Commodity Trading)",
        workFrom: "May 2021",
        workTo: "Jul 2021",
      },
      scope: [
        {
          id: crypto.randomUUID(),
          experience:
            "Exposed to all aspects of the palm oil industry - from upstream plantation operations to downstream palm oil refining.",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Closely follow the commodity futures market for procurement of raw material",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Liaise closely with in-house refineries to gauge material supply & production levels to plan procurement strategy",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Conduct daily analysis of rival commodities' markets to anticipate CPO futures market behaviour",
        },
        {
          id: crypto.randomUUID(),
          experience: "Daily documentation of trades done for assigned market",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      data: {
        workCompany: "Petareka Perunding (M) Sdn Bhd",
        workPosition: "Graduate Structural Engineer",
        workFrom: "May 2020",
        workTo: "Apr 2021",
      },
      scope: [
        {
          id: crypto.randomUUID(),
          experience:
            "Exposed to all aspects of the palm oil industry - from upstream plantation operations to downstream palm oil refining.",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Closely follow the commodity futures market for procurement of raw material",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Liaise closely with in-house refineries to gauge material supply & production levels to plan procurement strategy",
        },
        {
          id: crypto.randomUUID(),
          experience:
            "Conduct daily analysis of rival commodities' markets to anticipate CPO futures market behaviour",
        },
        {
          id: crypto.randomUUID(),
          experience: "Daily documentation of trades done for assigned market",
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

export default exampleCV;
