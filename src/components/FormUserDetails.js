import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import items from "../categories/Categories";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, disabled } = this.props;
    return (
      <Fragment>
        <div className="quiz">
          <h2 className="dark">Пройдите небольшой тест</h2>
          <TextField
            label="Имя"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            margin="normal"
            fullWidth={true}
            required
          />
          {values.firstName.length < 3 && values.firstName.length !== 0 && (
            <span className="errorMessage">Должно быть больше 3 символов</span>
          )}
          <br />
          <TextField
            label="Фамилия"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            margin="normal"
            fullWidth={true}
            required
          />
          {values.lastName.length < 3 && values.lastName.length !== 0 && (
            <span className="errorMessage">Должно быть больше 3 символов</span>
          )}
          <br />
          <div className="btn__container">
            {items.map((item, i) => (
              <label key={i}>
                <input
                  type="radio"
                  value={item.headline}
                  checked={values.selectedOption === item.headline}
                  onChange={handleChange("selectedOption")}
                />
                <img src={item.src} alt={item.headline} className="radio" />
                {item.headline}
              </label>
            ))}
          </div>

          <div className="btn__container">
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
      </Fragment>
    );
  }
}

export default FormUserDetails;
