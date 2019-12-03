import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import items from "../categories/Categories";

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
          <h2>
            Выберите какой тип <span className="red">рукава</span> Вы
            используете?
          </h2>
          <div className="quiz__box">
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
          </div>

          <div className="btn__container align-center">
            <Button
              variant="contained"
              onClick={this.continue}
              className="next btn"
              disabled={disabled}
            >
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
