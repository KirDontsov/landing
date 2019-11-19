import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
          />
          <br />
          <TextField
            label="Фамилия"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            margin="normal"
            fullWidth={true}
          />
          <br />
          <div className="btn__container">
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

export default FormUserDetails;
