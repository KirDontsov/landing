const filters = {
  state: {
    producer: "",
    standart: "",
    category: "",
    type: "",
    temperature: 175,
    inner: [10, 150],
    outer: [22, 172],
    pressureMpa: "",
    pressureAtm: "",
    lengh: [2.5, 100],
    producerFilterApplied: false,
    standartFilterApplied: false,
    categoryFilterApplied: false,
    typeFilterApplied: false,
    pressureMpaFilterApplied: false,
    pressureAtmFilterApplied: false,
    temperatureFilterApplied: false,
    rangeFilterApplied: false
  },
  reducers: {
    changeProducer: (state, payload) => ({
      ...state,
      producer: payload
    }),
    changeStandart: (state, payload) => ({
      ...state,
      standart: payload
    }),
    changeCategory: (state, payload) => ({
      ...state,
      category: payload
    }),
    changeType: (state, payload) => ({
      ...state,
      type: payload
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
    changeLengh: (state, payload) => ({
      ...state,
      lengh: payload
    }),
    changeFilterProducer: (state, payload) => ({
      ...state,
      producerFilterApplied: payload
    }),
    changeFilterStandart: (state, payload) => ({
      ...state,
      standartFilterApplied: payload
    }),
    changeFilterCategory: (state, payload) => ({
      ...state,
      categoryFilterApplied: payload
    }),
    changeFilterType: (state, payload) => ({
      ...state,
      typeFilterApplied: payload
    }),
    changeFilterPressureMpa: (state, payload) => ({
      ...state,
      pressureMpaFilterApplied: payload
    }),
    changeFilterPressureAtm: (state, payload) => ({
      ...state,
      pressureAtmFilterApplied: payload
    }),
    changeFilterTemperature: (state, payload) => ({
      ...state,
      temperatureFilterApplied: payload
    }),
    changeFilterRange: (state, payload) => ({
      ...state,
      rangeFilterApplied: payload
    })
  }
};

export default filters;
