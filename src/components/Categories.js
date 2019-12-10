import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../scss/Categories.scss";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  <div className="card short">
                    <img src={categories[0].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[0].headline}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col long">
                  <div className="card long">
                    <img src={categories[4].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[4].headline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap__inner half">
                <div className="col short">
                  <div className="card short">
                    <img src={categories[1].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[1].headline}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col short">
                  <div className="card short">
                    <img src={categories[1].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[1].headline}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col short">
                  <div className="card short">
                    <img src={categories[1].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[1].headline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap one">
              <div className="wrap__inner full">
                <div className="col long">
                  <div className="card long">
                    <img src={categories[3].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[3].headline}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col short">
                  <div className="card short">
                    <img src={categories[1].src} alt="" />
                    <div className="card__body">
                      <div className="card__title">
                        {categories[1].headline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
