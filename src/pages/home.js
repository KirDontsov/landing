import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slider from "../components/Slider";
import Quiz from "../components/Quiz";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import { connect } from "react-redux";

import slideData from "../categories/Categories";

class Home extends Component {
  componentDidMount() {
    this.props.slide(true);
  }
  render() {
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
        <Fade bottom delay={500}>
          <Slider heading="Slider" slides={slideData} />
        </Fade>
        <Fade bottom delay={500}>
          <Quiz />
        </Fade>

        <Benefits />

        <Fade bottom delay={500}>
          <Testimonials />
        </Fade>
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
