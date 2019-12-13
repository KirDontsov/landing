import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

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
      <div className="quiz__section">
        <div className="quiz">
          <Fade bottom delay={300}>
            <h2>Данные для связи</h2>
          </Fade>
          <Fade bottom cascade delay={300}>
            <div className="quiz__box inputs">
              <TextField
                label="Телефон"
                onChange={handleChange("phone")}
                defaultValue={values.phone}
                margin="normal"
                fullWidth={true}
                required
              />
              {values.phone.length < 11 && values.phone.length !== 0 && (
                <span className="errorMessage">
                  Введен некорректный номер телефона
                </span>
              )}
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
    );
  }
}

export default FormPersonalDetails;
