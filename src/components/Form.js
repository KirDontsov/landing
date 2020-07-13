import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MaskInput from "./MaskInput";
import { connect } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../scss/Form.scss";

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Montserrat", "sans-serif"].join(",")
	}
});

const Form = props => {
	const { email, phone } = props;
	const values = {
		email,
		phone
	};
	return (
		<ThemeProvider theme={theme}>
			<div className={props.className}>
				<p>{props.chosenItem && `Вас заинтересовал: ${props.chosenItem}`}</p>
				<MaskInput
					name="phone"
					mask="+7 (999) 999-99-99"
					// component={MaskInput}
					formLabel="Телефон"
					type="text"
					value={values.phone}
					onChange={e => props.setPhone(e.currentTarget.value)}
					fullWidth={true}
				/>
				<TextField
					label="Email"
					onChange={e => props.setEmail(e.currentTarget.value)}
					value={values.email}
					margin="normal"
					fullWidth={true}
					required
				/>
				{values.email.length !== 0 && !values.email.includes("@") && (
					<span className="errorMessage">Введен некорректный адрес почты</span>
				)}
				<br />

				<div className="btn__container footer">
					<Button variant="contained" onClick={e => props.changeDisabled()} className="next btn send">
						{props.fetching ? "Отправка..." : "Отправить"}
					</Button>
					{props.res ? <div className="alert">Сообщение оправлено</div> : null}
				</div>
			</div>
		</ThemeProvider>
	);
};

const mapState = state => ({
	email: state.form.email,
	phone: state.form.phone,
	fetching: state.form.fetching,
	res: state.form.res,
	chosenItem: state.form.chosenItem
});

const mapDispatch = ({ shutter: { changeClass }, form: { setEmail, setPhone, changeDisabled } }) => ({
	changeClass,
	setEmail,
	setPhone,
	changeDisabled
});

export default connect(
	mapState,
	mapDispatch
)(Form);
