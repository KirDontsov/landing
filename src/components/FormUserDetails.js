import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import items from "../categories/Categories";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.scrollToTop();
  };

  scrollToTop() {
    let div = document.querySelector(".wrapper");
    div.scrollTop = 600;
  }

  render() {
    const { values, handleChange, disabled } = this.props;
    return (
      <Fragment>
        <div className="quiz">
          <h2 className="dark">Выберите какой тип рукава Вы используете?</h2>
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
                  {item.headline}
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
      </Fragment>
    );
  }
}

export default FormUserDetails;
