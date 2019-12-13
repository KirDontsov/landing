import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../scss/Footer_form.scss";

class FooterForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      phone: "",
      disabled: true
    };
  }
  continue = e => {
    e.preventDefault();
    // Send FORM //
    let formData = this.state;
    console.log(formData);
    fetch("mail.php", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        phone: formData.phone
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.currentTarget.value });
    console.log(e.currentTarget.value);

    if (
      this.state.phone &&
      this.state.email &&
      this.state.email.includes("@") !== ""
    ) {
      this.setState({ disabled: false });
    }
  };

  render() {
    const { disabled, email, phone } = this.state;
    const values = {
      email,
      phone
    };
    return (
      <div className="footer__form">
        <TextField
          label="Телефон"
          onChange={this.handleChange("phone")}
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
          onChange={this.handleChange("email")}
          defaultValue={values.email}
          margin="normal"
          fullWidth={true}
          required
        />
        {values.email.length !== 0 && !values.email.includes("@") && (
          <span className="errorMessage">Введен некорректный адрес почты</span>
        )}
        <br />

        <div className="btn__container footer">
          <Button
            variant="contained"
            onClick={this.continue}
            className="next btn"
            disabled={disabled}
          >
            Отправить
          </Button>
        </div>
      </div>
    );
  }
}

export default FooterForm;
