import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../scss/Categories.scss";
import Fade from "react-reveal/Fade";

class Categories extends Component {
  handleClick(e) {
    this.props.slide(true);
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="categories__container">
        <div className="center">
          <div className="categories__wrapper">
            <div className="wrap two">
              <div className="wrap__inner half">
                <div className="col short">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[0].link}
                      onClick={e => this.handleClick(e)}
                      className="card short"
                    >
                      <img
                        src={categories[0].src}
                        alt={categories[0].headline}
                      />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[0].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
                <div className="col long">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[4].link}
                      onClick={e => this.handleClick(e)}
                      className="card long"
                    >
                      <img
                        src={categories[4].src}
                        alt={categories[4].headline}
                      />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[4].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
              </div>
              <div className="wrap__inner half">
                <div className="col short">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[1].link}
                      onClick={e => this.handleClick(e)}
                      className="card short"
                    >
                      <img
                        src={categories[1].src}
                        alt={categories[1].headline}
                      />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[1].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
                <div className="col short">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[2].link}
                      onClick={e => this.handleClick(e)}
                      className="card short"
                    >
                      <img
                        src={categories[2].src}
                        alt={categories[2].headline}
                      />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[2].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
                <div className="col short">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[5].link}
                      onClick={e => this.handleClick(e)}
                      className="card short"
                    >
                      <img
                        src={categories[5].src}
                        alt={categories[5].headline}
                      />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[5].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="wrap one">
              <div className="wrap__inner full">
                <div className="col long">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[3].link}
                      onClick={e => this.handleClick(e)}
                      className="card long"
                    >
                      <img src={categories[3].src} alt="" />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[3].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
                <div className="col short">
                  <Fade bottom delay={300}>
                    <Link
                      to={categories[6].link}
                      onClick={e => this.handleClick(e)}
                      className="card short"
                    >
                      <img
                        src={categories[6].src}
                        alt={categories[6].headline}
                      />
                      <div className="card__body">
                        <div className="card__title">
                          {categories[6].headline}
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapState, mapDispatch)(Categories);
