import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MaskInput from "./MaskInput";
import { connect } from "react-redux";
import "../scss/Form.scss";

class Form extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     email: "",
  //     phone: "",
  //     disabled: true
  //   };
  // }
  continue = e => {
    e.preventDefault();
    // Send FORM //
    // let formData = this.props;
    // console.log(formData);
    fetch("mail.php", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({
        email: this.props.email,
        phone: this.props.phone
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

  // handleChange = input => e => {
  //   this.setState({ [input]: e.currentTarget.value });
  //   console.log(e.currentTarget.value);

  //   if (
  //     this.state.phone &&
  //     this.state.email &&
  //     this.state.email.includes("@") !== ""
  //   ) {
  //     this.props.({ disabled: false });
  //   }
  // };

  render() {
    const { disabled, email, phone } = this.props;
    const values = {
      email,
      phone
    };
    return (
      <div className={this.props.className}>
        <MaskInput
          name="phone"
          mask="+7 (999) 999-99-99"
          // component={MaskInput}
          type="text"
          label="Телефон"
          value={values.phone}
          onChange={e => this.props.setPhone(e.currentTarget.value)}
        />
        <TextField
          label="Email"
          onChange={e => this.props.setEmail(e.currentTarget.value)}
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
          <Button
            variant="contained"
            onClick={e => this.props.changeDisabled()}
            className="next btn send"
          >
            {this.props.fetching ? "Отправка..." : "Отправить"}
          </Button>
          {this.props.res ? (
            <div className="alert">Сообщение оправлено</div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  email: state.form.email,
  phone: state.form.phone,
  fetching: state.form.fetching,
  res: state.form.res
});

const mapDispatch = ({
  shutter: { changeClass },
  form: { setEmail, setPhone, changeDisabled }
}) => ({
  changeClass,
  setEmail,
  setPhone,
  changeDisabled
});

export default connect(mapState, mapDispatch)(Form);
