import React, { useCallback } from "react";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../scss/Filters.scss";

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(",")
	}
});

function valuetext(value) {
	return `${value}°C`;
}

const Filters = props => {
	const handleChangeProducer = useCallback(
		e => {
			props.changeProducer(e.target.value);
			props.changeFilterProducer(true);
		},
		[props]
	);

	const handleChangeStandart = useCallback(
		e => {
			props.changeStandart(e.target.value);
			props.changeFilterStandart(true);
		},
		[props]
	);

	const handleChangeCategory = useCallback(
		e => {
			props.changeCategory(e.target.value);
			props.changeFilterCategory(true);
		},
		[props]
	);

	const handleChangeType = useCallback(
		e => {
			props.changeType(e.target.value);
			props.changeFilterType(true);
		},
		[props]
	);

	const handleChangeInner = useCallback(
		(e, newValue) => {
			props.changeInner(newValue);
			props.changeFilterRange(true);
		},
		[props]
	);

	const handleChangeOuter = useCallback(
		(e, newValue) => {
			props.changeOuter(newValue);
			props.changeFilterRange(true);
		},
		[props]
	);

	const handleChangePressureMpa = useCallback(
		e => {
			props.changePressureMpa(e.target.value);
			props.changeFilterPressureMpa(true);
			props.changeFilterPressureAtm(false);
			props.changePressureAtm("");
		},
		[props]
	);

	const handleChangePressureAtm = useCallback(
		e => {
			props.changePressureAtm(e.target.value);
			props.changeFilterPressureAtm(true);
			props.changeFilterPressureMpa(false);
			props.changePressureMpa("");
		},
		[props]
	);

	const handleChangeLengh = useCallback(
		(e, newValue) => {
			props.changeLengh(newValue);
			props.changeFilterRange(true);
		},
		[props]
	);

	const handleChangeTemperature = useCallback(
		(e, newValue) => {
			props.changeTemperature(newValue);
			props.changeFilterRange(true);
		},
		[props]
	);

	const dropFilters = useCallback(
		() => {
			props.changeProducer("");
			props.changeFilterProducer(false);
			props.changeStandart("");
			props.changeFilterStandart(false);
			props.changeCategory("");
			props.changeFilterCategory(false);
			props.changeType("");
			props.changeFilterType(false);
			props.changeInner([10, 150]);
			props.changeFilterRange(false);
			props.changeOuter([14, 172]);
			props.changePressureMpa("");
			props.changePressureAtm("");
			props.changeFilterPressureMpa(false);
			props.changeFilterPressureAtm(false);
			props.changeLengh([2.5, 100]);
			props.changeFilterRange(false);
			props.changeTemperature(175);
			props.changeFilterRange(false);
		},
		[props]
	);

	const { producer, standart, category, type, inner, outer, pressureMpa, pressureAtm, lengh, temperature } = props;

	return (
		<ThemeProvider theme={theme}>
			<div className={props.className}>
				<FormControl className="formControl">
					<InputLabel id="demo-simple-select-label">Категория</InputLabel>
					<Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} onChange={handleChangeCategory}>
						<MenuItem value={"Рукава для бензина и минеральных масел"}>Рукава для бензина и минеральных масел</MenuItem>
						<MenuItem value={"Рукава для технической воды"}>Рукава для технической воды</MenuItem>
						<MenuItem value={"Рукава для горячей воды"}>Рукава для горячей воды</MenuItem>
						<MenuItem value={"Рукава для газа"}>Рукава для газа</MenuItem>
						<MenuItem value={"Рукава для пара"}>Рукава для пара</MenuItem>
						<MenuItem value={"Рукава для пищевых продуктов"}>Рукава для пищевых продуктов</MenuItem>
						<MenuItem value={"Рукава для абразива"}>Рукава для абразива</MenuItem>
						<MenuItem value={"Рукава для химических веществ"}>Рукава для химических веществ</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="formControl">
					<InputLabel id="demo-simple-select-label">Тип</InputLabel>
					<Select labelId="demo-simple-select-label" id="demo-simple-select" value={type} onChange={handleChangeType}>
						<MenuItem value={"напорные"}>Напорные</MenuItem>
						<MenuItem value={"всасывающие"}>Всасывающие</MenuItem>
						<MenuItem value={"напорно-всасывающие"}>Напорно-всасывающие</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="formControl">
					<InputLabel id="demo-simple-select-label">Давление, МПа</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={pressureMpa}
						onChange={handleChangePressureMpa}
					>
						<MenuItem value={"0.30"}>0,30</MenuItem>
						<MenuItem value={"0.49"}>0,49</MenuItem>
						<MenuItem value={"0.50"}>0,50</MenuItem>
						<MenuItem value={"0.63"}>0,63</MenuItem>
						<MenuItem value={"0.70"}>0,70</MenuItem>
						<MenuItem value={"0.80"}>0,80</MenuItem>
						<MenuItem value={"0.98"}>0,98</MenuItem>
						<MenuItem value={"1.00"}>1,00</MenuItem>
						<MenuItem value={"1.30"}>1,30</MenuItem>
						<MenuItem value={"1.47"}>1,47</MenuItem>
						<MenuItem value={"1.60"}>1,60</MenuItem>
						<MenuItem value={"4.00"}>4,00</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="formControl">
					<InputLabel id="demo-simple-select-label">Давление, Атм</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={pressureAtm}
						onChange={handleChangePressureAtm}
					>
						<MenuItem value={"3.00"}>3,00</MenuItem>
						<MenuItem value={"4.90"}>4,90</MenuItem>
						<MenuItem value={"5.00"}>5,00</MenuItem>
						<MenuItem value={"6.30"}>6,30</MenuItem>
						<MenuItem value={"7.00"}>7,00</MenuItem>
						<MenuItem value={"8.00"}>8,00</MenuItem>
						<MenuItem value={"9.80"}>9,80</MenuItem>
						<MenuItem value={"10.00"}>10,00</MenuItem>
						<MenuItem value={"13.00"}>1,30</MenuItem>
						<MenuItem value={"14.70"}>14,70</MenuItem>
						<MenuItem value={"16.00"}>16,00</MenuItem>
						<MenuItem value={"40.00"}>40,00</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="formControl">
					<InputLabel id="demo-simple-select-label">Стандарт</InputLabel>
					<Select labelId="demo-simple-select-label" id="demo-simple-select" value={standart} onChange={handleChangeStandart}>
						<MenuItem value={"ГОСТ 18698-78"}>ГОСТ 18698-78</MenuItem>
						<MenuItem value={"ГОСТ 18698-79"}>ГОСТ 18698-79</MenuItem>
						<MenuItem value={"ГОСТ 18698-80"}>ГОСТ 18698-80</MenuItem>
						<MenuItem value={"ГОСТ 18698-81"}>ГОСТ 18698-81</MenuItem>
						<MenuItem value={"ГОСТ 18698-82"}>ГОСТ 18698-82</MenuItem>
						<MenuItem value={"ГОСТ 18698-83"}>ГОСТ 18698-83</MenuItem>
						<MenuItem value={"ГОСТ 18698-84"}>ГОСТ 18698-84</MenuItem>
						<MenuItem value={"ГОСТ 18698-85"}>ГОСТ 18698-85</MenuItem>
						<MenuItem value={"ГОСТ 5398-76"}>ГОСТ 5398-76</MenuItem>
						<MenuItem value={"ГОСТ 5398-77"}>ГОСТ 5398-77</MenuItem>
						<MenuItem value={"ГОСТ 10362-76"}>ГОСТ 10362-76</MenuItem>

						<MenuItem value={"ТУ 2553-189-05788889-2004"}>ТУ 2553-189-05788889-2004</MenuItem>
						<MenuItem value={"ТУ 38 105981-"}>ТУ 38 105981-</MenuItem>
						<MenuItem value={"ТУ 0056016-87"}>ТУ 0056016-87</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="formControl">
					<InputLabel id="demo-simple-select-label">Производитель</InputLabel>
					<Select labelId="demo-simple-select-label" id="demo-simple-select" value={producer} onChange={handleChangeProducer}>
						<MenuItem value={"Россия"}>Россия</MenuItem>
						<MenuItem value={"Китай"}>Китай</MenuItem>
						<MenuItem value={"Тайвань"}>Тайвань</MenuItem>
					</Select>
				</FormControl>

				<FormControl className="formControl">
					<Typography className="rangeControl" id="range-slider" gutterBottom>
						Внутр. диаметр, мм
					</Typography>
					<Slider
						value={inner}
						min={10}
						max={150}
						onChange={handleChangeInner}
						valueLabelDisplay="auto"
						aria-labelledby="range-slider"
					/>
				</FormControl>

				<FormControl className="formControl">
					<Typography className="rangeControl" id="range-slider" gutterBottom>
						Внеш. диаметр, мм
					</Typography>
					<Slider
						min={14}
						max={172}
						value={outer}
						onChange={handleChangeOuter}
						valueLabelDisplay="auto"
						aria-labelledby="range-slider"
					/>
				</FormControl>

				<FormControl className="formControl">
					<Typography className="rangeControl" id="range-slider" gutterBottom>
						Длина, м
					</Typography>
					<Slider
						value={lengh}
						min={2.5}
						max={100}
						onChange={handleChangeLengh}
						valueLabelDisplay="auto"
						aria-labelledby="range-slider"
					/>
				</FormControl>
				<FormControl className="formControl">
					<Typography className="rangeControl" id="range-slider" gutterBottom>
						Температура, °C
					</Typography>

					<Slider
						value={temperature}
						getAriaValueText={valuetext}
						aria-labelledby="discrete-slider-small-steps"
						onChange={handleChangeTemperature}
						min={-55}
						max={175}
						marks
						step={10}
						valueLabelDisplay="on"
					/>
				</FormControl>
				<p className="dropFilters" onClick={dropFilters}>
					Сбросить
				</p>
			</div>
		</ThemeProvider>
	);
};

const mapState = state => ({
	addClass: state.shutter.addClass,
	producer: state.filters.producer,
	standart: state.filters.standart,
	category: state.filters.category,
	type: state.filters.type,
	inner: state.filters.inner,
	outer: state.filters.outer,
	pressureMpa: state.filters.pressureMpa,
	pressureAtm: state.filters.pressureAtm,
	lengh: state.filters.lengh,
	temperature: state.filters.temperature,
	producerFilterApplied: state.filters.producerFilterApplied,
	standartFilterApplied: state.filters.standartFilterApplied,
	categorytFilterApplied: state.filters.categorytFilterApplied,
	typeFilterApplied: state.filters.typeFilterApplied,
	pressureMpaFilterApplied: state.filters.pressureMpaFilterApplied,
	pressureAtmFilterApplied: state.filters.pressureAtmFilterApplied,
	temperatureFilterApplied: state.filters.temperatureFilterApplied,
	rangeFilterApplied: state.filters.rangeFilterApplied
});

const mapDispatch = ({
	shutter: { slide },
	filters: {
		changeProducer,
		changeStandart,
		changeCategory,
		changeType,
		changeTemperature,
		changeInner,
		changeOuter,
		changePressureMpa,
		changePressureAtm,
		changeLengh,
		changeFilterProducer,
		changeFilterStandart,
		changeFilterCategory,
		changeFilterType,
		changeFilterPressureMpa,
		changeFilterPressureAtm,
		changeFilterTemperature,
		changeFilterRange
	}
}) => ({
	slide,
	changeProducer,
	changeStandart,
	changeCategory,
	changeType,
	changeTemperature,
	changeInner,
	changeOuter,
	changePressureMpa,
	changePressureAtm,
	changeLengh,
	changeFilterProducer,
	changeFilterStandart,
	changeFilterCategory,
	changeFilterType,
	changeFilterPressureMpa,
	changeFilterPressureAtm,
	changeFilterTemperature,
	changeFilterRange
});

export default connect(
	mapState,
	mapDispatch
)(Filters);
