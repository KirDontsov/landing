import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import { ThemeProvider } from "@material-ui/core/styles";
import MaskInput from "./MaskInput";

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, disabled } = this.props;
    return (
      <ThemeProvider theme={this.props.theme}>
        <div className="quiz__section">
          <div className="quiz">
            <Fade bottom delay={300}>
              <h2>Данные для связи</h2>
            </Fade>
            <Fade bottom cascade delay={300}>
              <div className="quiz__box inputs">
                <MaskInput
                  name="phone"
                  mask="+7 (999) 999-99-99"
                  // component={MaskInput}
                  formLabel="Телефон"
                  type="text"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  fullWidth={true}
                />
                <TextField
                  label="Email"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  margin="normal"
                  fullWidth={true}
                  required
                />
                {values.email.length !== 0 && !values.email.includes("@") && (
                  <span className="errorMessage">
                    Введен некорректный адрес почты
                  </span>
                )}
                <br />
                <TextField
                  label="Город"
                  onChange={handleChange("city")}
                  defaultValue={values.city}
                  margin="normal"
                  fullWidth={true}
                  required
                />
                {values.city.length < 3 && values.city.length !== 0 && (
                  <span className="errorMessage">
                    Название города должно быть больше 3 символов
                  </span>
                )}
                <br />
                <TextField
                  label="Наименование товара"
                  onChange={handleChange("item")}
                  defaultValue={values.item}
                  margin="normal"
                  fullWidth={true}
                  required
                />
                {values.item.length < 3 && values.item.length !== 0 && (
                  <span className="errorMessage">
                    Наименование товара должно быть больше 3 символов
                  </span>
                )}
                <br />
              </div>
            </Fade>
            <div className="btn__container inputs">
              <Button
                variant="contained"
                onClick={this.back}
                className="next btn"
              >
                Назад
              </Button>
              <Button
                variant="contained"
                onClick={this.continue}
                className="next btn"
                disabled={disabled}
              >
                Продолжить
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default FormPersonalDetails;
