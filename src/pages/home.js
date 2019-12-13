import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import CategoriesMob from "../mob_components/Categories__mob";
import Quiz from "../components/Quiz";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Categories from "../components/Categories";
import { connect } from "react-redux";

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
    return (
      <div className="container__margin home">
        <Fade bottom delay={700}>
          <div className="heading">
            <div className="hero__banner">
              <h1 className="title main">
                Большой выбор рукавов по приемлемым ценам
              </h1>
            </div>
          </div>
        </Fade>
        {!isMobile ? (
          <Categories categories={slideData} />
        ) : (
          <CategoriesMob categories={slideData} />
        )}
        <Quiz />
        <Benefits />
        <Testimonials />
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
