import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import CategoriesMob from "../mob_components/Categories__mob";
import Quiz from "../components/Quiz";
import Categories from "../components/Categories";
import { connect } from "react-redux";
import Form from "../components/Form";

import slideData from "../categories/Categories";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    this.props.slide(true);
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    let formClass = ["header__form"];
    return (
      <div className="container__margin home">
        <Fade bottom delay={700}>
          <div className="heading">
            <div className="hero__banner">
              <div className="center">
                <h1 className="title main">
                  Большой выбор рукавов по приемлемым ценам
                </h1>
                <div className="colWrapper">
                  <div className="colMain">
                    <div className="col">
                      <h2 className="white">Цены</h2>
                      <p className="text">Цены на 5-8% ниже рыночных</p>
                      <h2 className="white">Качество</h2>
                      <p className="text">
                        Качество соответствует международным и отечественным
                        стандартам
                      </p>
                    </div>
                    <div className="col">
                      <h2 className="white">Склад</h2>
                      <p className="text">
                        Широкий ассортимент продукции, более 62 километров в
                        наличии на складе
                      </p>
                      <h2 className="white">Доставка</h2>
                      <p className="text">
                        Доставка во все регионы россии, круглосуточная отправка
                        продукции
                      </p>
                    </div>
                  </div>
                  <div className="colMain">
                    <div className="col form">
                      <h2 className="white">Оставьте свои контакты</h2>
                      <Form className={formClass} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        {!isMobile ? (
          <Categories categories={slideData} />
        ) : (
          <CategoriesMob categories={slideData} />
        )}
        <Quiz />
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

export default connect(mapState, mapDispatch)(Home);
