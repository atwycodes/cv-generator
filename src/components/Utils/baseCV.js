const baseCV = {
  general: {
    data: {
      generalName: '',
      generalEmail: '',
      generalPhoneNumber: '',
      generalLocation: '',
    }
  },

  work: [{
    id: crypto.randomUUID(),
    data: {
      workCompany: '',
      workPosition: '',
      workFrom: '',
      workTo: '',
    }
  }],

  // education: [{
  //   id: crypto.randomUUID(),
  //   data: {}
  // }],

  // skills: [{
  //   id: crypto.randomUUID(),
  //   data: {}
  // }],
}

export default baseCV