import React, { Component, Fragment } from "react";
import classNames from "classnames";

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

    if (this.state.addClass) {
      buttonClass.push("active");
      navClass.push("active");
    }
    return (
      <Fragment>
        <div className={navClass.join(" ")}>
          <ul>
            <li>adfnhsfdgmnsfg</li>
          </ul>
        </div>
        <Button
          className={buttonClass.join(" ")}
          onClick={this._onClick.bind(this)}
        >
          Заказать звонок
        </Button>
      </Fragment>
    );
  }
}

export default CallBack;
