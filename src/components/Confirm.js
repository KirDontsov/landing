import React, { Component, Fragment } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    // PROCESS FORM //
    let formData = this.props.values;
    console.log(formData);
    fetch("mail.php", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        item: formData.item
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, phone, city, item }
    } = this.props;

    return (
      <Fragment>
        <div className="quiz">
          <List>
            <ListItem>
              <ListItemText primary="Имя" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Фамилия" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Телефон" secondary={phone} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Город" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Наименование товара" secondary={item} />
            </ListItem>
          </List>
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
              type="submit"
              variant="contained"
              onClick={this.continue}
              className="next btn"
            >
              Подтвердить и Отправить
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Confirm;
