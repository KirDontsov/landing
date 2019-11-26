import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ScrollButton from "../components/ScrollButton";
import "../scss/Footer.scss";

class Footer extends Component {
  handleClick(event) {
    this.props.slide(true);
  }
  render() {
    return (
      <Fragment>
        <div className="footer">
          <div className="col__center">
            <div className="col">
              {this.props.routes.map(route =>
                route.id <= 10 ? (
                  <NavLink
                    className={route.className}
                    exact={route.isExact}
                    activeClassName="active"
                    key={route.path}
                    to={route.path}
                    onClick={e => this.handleClick(e)}
                  >
                    {route.name}
                  </NavLink>
                ) : null
              )}
            </div>
            <div className="col">
              {this.props.routes.map(route =>
                route.id > 10 && route.id < 15 ? (
                  <NavLink
                    className={route.className}
                    exact={route.isExact}
                    activeClassName="active"
                    key={route.path}
                    to={route.path}
                    onClick={e => this.handleClick(e)}
                  >
                    {route.name}
                  </NavLink>
                ) : null
              )}
            </div>
            <div className="col">
              {this.props.routes.map(route =>
                route.id > 14 ? (
                  <NavLink
                    className={route.className}
                    exact={route.isExact}
                    activeClassName="active"
                    key={route.path}
                    to={route.path}
                    onClick={e => this.handleClick(e)}
                  >
                    {route.name}
                  </NavLink>
                ) : null
              )}
            </div>
          </div>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
        </div>
      </Fragment>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass
});

const mapDispatch = ({ shutter: { slide } }) => ({
  slide
});

export default connect(mapState, mapDispatch)(Footer);

Footer.propTypes = {
  routes: PropTypes.array
};
