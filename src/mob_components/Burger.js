import React, { Component, Fragment } from "react";
import { Motion, spring } from "react-motion";
import { noop } from "lodash";
import classNames from "classnames";
import { NavLink, Link } from "react-router-dom";
import CallBack from "./CallBack__mob";
import { routes } from "../routes";

import "../scss/Burger.scss";

const Button = props => (
  <button
    className={classNames("button", props.className)}
    style={props.style}
    onClick={props.onClick || noop}
  >
    {props.children}
  </button>
);

class Burger extends Component {
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
    let buttonClass = ["button--large"];
    let navClass = ["nav__toggle"];

    if (this.state.addClass) {
      buttonClass.push("active");
      navClass.push("active");
    }
    return (
      <Fragment>
        <Motion
          defaultStyle={{ s: 0.675 }}
          style={{
            s: spring(this.state.active ? 1 : 0.675, {
              stiffness: 330,
              damping: 14
            })
          }}
        >
          {interpolatingStyles => (
            <Fragment>
              <div className={navClass.join(" ")}>
                <div className="container__mob">
                  {this.props.routes.map(route =>
                    route.id > 1 ? (
                      <NavLink
                        className={route.className}
                        exact={route.isExact}
                        activeClassName="active"
                        key={route.path}
                        to={route.path}
                        onClick={this._onClick.bind(this)}
                      >
                        {route.name}
                      </NavLink>
                    ) : null
                  )}
                </div>
                <CallBack routes={routes.filter(route => route.isMobile)} />
              </div>
              <Button
                className={buttonClass.join(" ")}
                onClick={this._onClick.bind(this)}
                style={{
                  transform: "scale(" + interpolatingStyles.s + ")"
                }}
              >
                <span
                  className={
                    this.state.active ? "icon__burger active" : "icon__burger"
                  }
                />
              </Button>
              <a href="tel:83432885690" className="phone">
                +7 (343) 288-56-90
              </a>
              <Link className="logo__mob" to="/">
                РТИ-Торг
              </Link>
            </Fragment>
          )}
        </Motion>
      </Fragment>
    );
  }
}

export default Burger;
