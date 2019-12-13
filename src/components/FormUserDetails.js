import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import items from "../categories/Categories";
import Fade from "react-reveal/Fade";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    // this.scrollToTop();
  };

  // scrollToTop() {
  //   let div = document.querySelector(".wrapper");
  //   div.scrollTop = 600;
  // }

  render() {
    const { values, handleChange, disabled } = this.props;
    return (
      <div className="quiz__section">
        <div className="quiz">
          <Fade bottom delay={300}>
            <h2>
              Выберите какой тип <span className="red">рукава</span> Вы
              используете?
            </h2>
          </Fade>
          <div className="quiz__box ">
            <Fade bottom cascade delay={500}>
              <div className="btn__container question">
                {items.map((item, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      value={item.headline}
                      checked={values.selectedOption === item.headline}
                      onChange={handleChange("selectedOption")}
                    />
                    <img src={item.src} alt={item.headline} className="radio" />
                    <span className="white">{item.headline}</span>
                  </label>
                ))}
              </div>
            </Fade>
          </div>

          <div className="btn__container align-center">
            <Fade bottom delay={900}>
              <Button
                variant="contained"
                onClick={this.continue}
                className="next btn"
                disabled={disabled}
              >
                Продолжить
              </Button>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
