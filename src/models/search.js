const search = {
  state: {
    searchTerm: "",
    addClassSearch: false
  },
  reducers: {
    changeClass: (state, payload) => ({
      ...state,
      addClassSearch: payload
    }),
    changeSearchTerm: (state, payload) => ({
      ...state,
      searchTerm: payload
    })
  }
};

export default search;
