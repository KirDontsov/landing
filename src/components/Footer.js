import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ScrollButton from "../components/ScrollButton";
import Form from "../components/Form";
import "../scss/Footer.scss";

class Footer extends Component {
  handleClick(event) {
    this.props.slide(true);
  }
  render() {
    let footer = ["footer__form"];
    return (
      <Fragment>
        <div className="footer">
          <div className="col__center">
            <div className="col">
              <h3 className="footer__title">Быстрые ссылки</h3>
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
              <h3 className="footer__title">Контактная информация</h3>
              <ul>
                <li className="footer__contacts">620087, г. Екатеринбург</li>
                <li className="footer__contacts">Межевая, 11</li>
                <li className="footer__contacts">info@rti-torg.ru</li>
                <li className="footer__contacts">+7 (343) 385-58-57</li>
              </ul>
            </div>
            <div className="col">
              <h3 className="footer__title">Оставьте свои контакты</h3>
              <Form className={footer} />
            </div>
          </div>
          <div className="col__center second">
            <div className="col">
              <div className="logo"></div>
            </div>
            <div className="col">
              <p className="copyright">© РТИ-Торг, 2019. Все права защищены</p>
            </div>
            <div className="col"></div>
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
