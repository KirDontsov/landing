import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "../scss/Filters.scss";

function valuetext(value) {
  return `${value}°C`;
}

class Filters extends Component {
  handleChange = e => {
    this.props.changeProducer(e.target.value);
  };

  handleChangeInner = (e, newValue) => {
    this.props.changeInner(newValue);
  };

  handleChangeOuter = (e, newValue) => {
    this.props.changeOuter(newValue);
  };

  handleChangePressureMpa = (e, newValue) => {
    this.props.changePressureMpa(newValue);
  };

  handleChangePressureAtm = (e, newValue) => {
    this.props.changePressureAtm(newValue);
  };

  handleChangeWidth = (e, newValue) => {
    this.props.changeWidth(newValue);
  };

  handleChangeTemperature = (e, newValue) => {
    this.props.changeTemperature(newValue);
  };

  render() {
    const {
      producer,
      inner,
      outer,
      pressureMpa,
      pressureAtm,
      width,
      temperature
    } = this.props;

    return (
      <Fragment>
        <FormControl className="formControl">
          <InputLabel id="demo-simple-select-label">Производитель</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={producer}
            onChange={this.handleChange}
          >
            <MenuItem value={"Россия"}>Россия</MenuItem>
            <MenuItem value={"Китай"}>Китай</MenuItem>
            <MenuItem value={"Тайвань"}>Тайвань</MenuItem>
          </Select>
        </FormControl>

        <Typography className="rangeControl" id="range-slider" gutterBottom>
          Внутренний диаметр, мм
        </Typography>
        <Slider
          value={inner}
          onChange={this.handleChangeInner}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        <Typography className="rangeControl" id="range-slider" gutterBottom>
          Внешний диаметр, мм
        </Typography>
        <Slider
          value={outer}
          onChange={this.handleChangeOuter}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        <Typography className="rangeControl" id="range-slider" gutterBottom>
          Давление, МПа
        </Typography>
        <Slider
          value={pressureMpa}
          onChange={this.handleChangePressureMpa}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        <Typography className="rangeControl" id="range-slider" gutterBottom>
          Давление, Атм
        </Typography>
        <Slider
          value={pressureAtm}
          onChange={this.handleChangePressureAtm}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        <Typography className="rangeControl" id="range-slider" gutterBottom>
          Длина, м
        </Typography>
        <Slider
          value={width}
          onChange={this.handleChangeWidth}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        <Typography className="rangeControl" id="range-slider" gutterBottom>
          Температура, °C
        </Typography>
        <Slider
          value={temperature}
          onChange={this.handleChangeTemperature}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </Fragment>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass,
  producer: state.filters.producer,
  inner: state.filters.inner,
  outer: state.filters.outer,
  pressureMpa: state.filters.pressureMpa,
  pressureAtm: state.filters.pressureAtm,
  width: state.filters.width,
  temperature: state.filters.temperature
});

const mapDispatch = ({
  shutter: { slide },
  filters: {
    changeProducer,
    changeTemperature,
    changeInner,
    changeOuter,
    changePressureMpa,
    changePressureAtm,
    changeWidth
  }
}) => ({
  slide,
  changeProducer,
  changeTemperature,
  changeInner,
  changeOuter,
  changePressureMpa,
  changePressureAtm,
  changeWidth
});

export default connect(mapState, mapDispatch)(Filters);
