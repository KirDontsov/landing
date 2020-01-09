const filters = {
  state: {
    producer: "Россия",
    temperature: [0, 100],
    inner: [0, 100],
    outer: [0, 100],
    pressureMpa: [0, 100],
    pressureAtm: [0, 100],
    width: [0, 100]
  },
  reducers: {
    changeProducer: (state, payload) => ({
      ...state,
      producer: payload
    }),
    changeTemperature: (state, payload) => ({
      ...state,
      temperature: payload
    }),
    changeInner: (state, payload) => ({
      ...state,
      inner: payload
    }),
    changeOuter: (state, payload) => ({
      ...state,
      outer: payload
    }),
    changePressureMpa: (state, payload) => ({
      ...state,
      pressureMpa: payload
    }),
    changePressureAtm: (state, payload) => ({
      ...state,
      pressureAtm: payload
    }),
    changeWidth: (state, payload) => ({
      ...state,
      width: payload
    })
  }
};

export default filters;
