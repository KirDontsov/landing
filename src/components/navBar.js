import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Search from "./Search";
import CallBack from "./CallBack";
import "../scss/Nav.scss";
import { routes } from "../routes";

class NavigationBar extends Component {
  handleClick(e) {
    this.props.slide(true);
    this.scrollToTop();
  }

  scrollToTop() {
    let div = document.querySelector(".wrapper");
    div.scrollTop = 0;
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="center">
          <div className="nav__top">
            {/* <Search /> */}
            <div className="left__text">
              <p>Время работы: с 8:00 до 16:00</p>
            </div>

            <div className="right__text">
              <a href="tel:84956401225" className="phone">
                +7 (495) 640 12 25
              </a>
              <p>rti-torg@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="center nav__bot">
          {this.props.routes.map(route =>
            route.id === 1 ? (
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
          <nav>
            {this.props.routes.map(route =>
              route.id > 1 ? (
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
          </nav>
          <CallBack routes={routes.filter(route => route.isMobile)} />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  addClass: state.shutter.addClass
});

const mapDispatch = ({ shutter: { slide } }) => ({
  slide
});

export default connect(mapState, mapDispatch)(NavigationBar);

NavigationBar.propTypes = {
  routes: PropTypes.array
};
