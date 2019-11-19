import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <div className="quiz">
          <h2 className="dark">Данные для связи</h2>
          <TextField
            label="Телефон"
            onChange={handleChange("phone")}
            defaultValue={values.phone}
            margin="normal"
            fullWidth={true}
          />
          <TextField
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            margin="normal"
            fullWidth={true}
          />
          <br />
          <TextField
            label="Город"
            onChange={handleChange("city")}
            defaultValue={values.city}
            margin="normal"
            fullWidth={true}
          />
          <br />
          <TextField
            label="Наименование товара"
            onChange={handleChange("item")}
            defaultValue={values.item}
            margin="normal"
            fullWidth={true}
          />
          <br />
          <div className="btn__container">
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
            >
              Продолжить
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FormPersonalDetails;
