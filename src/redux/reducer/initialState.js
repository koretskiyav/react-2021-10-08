const initialState = {
  contacts: {
    productList: [],
    newContact: {
      name: '',
      surname: '',
      email: '',
      address: '',
      phone: '',
    },
  },
  ui: {
    isContactFormHidden: true,
  },
};

export default initialState;
