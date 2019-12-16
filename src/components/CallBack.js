import React, { Component, Fragment } from "react";
import classNames from "classnames";
import Form from "./Form";

import "../scss/CallBack.scss";

const Button = props => (
  <button className={classNames(props.className)} onClick={props.onClick}>
    {props.children}
  </button>
);

class CallBack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      addClass: false
    };

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      active: !this.state.active,
      addClass: !this.state.addClass
    });
  }

  render() {
    let buttonClass = ["callBack"];
    let navClass = ["nav__toggle"];
    let header = ["header__form"];

    if (this.state.addClass) {
      buttonClass.push("active");
      navClass.push("active");
    }
    return (
      <Fragment>
        <div className={navClass.join(" ")}>
          <div className="container__form">
            <Form className={header} />
          </div>
        </div>
        <Button
          className={buttonClass.join(" ")}
          onClick={this._onClick.bind(this)}
        >
          <span
            className={
              this.state.active ? "icon__burger nav active" : "icon__burger nav"
            }
          />
          Заказать звонок
        </Button>
      </Fragment>
    );
  }
}

export default CallBack;
