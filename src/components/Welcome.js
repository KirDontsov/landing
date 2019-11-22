import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";

class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <Fragment>
        <div className="quiz">
          <h2 className="dark">
            Ответьте на <span className="red">несколько простых вопросов</span>{" "}
            и получите каталог рукавов и шлангов
          </h2>
          <div className="quiz__box">
            <div className="icon__li">
              <div className="col">
                <ul>
                  <li className="text dark">
                    Отгрузка день в день, 24/7 и доставка до ТК бесплатно
                  </li>
                  <li className="text dark">
                    Налаженные контакты более чем с 50 поставщиками
                  </li>
                  <li className="text dark">
                    Бесплатно соберем рукав в готовое изделие
                  </li>
                  <li className="text dark">
                    От 10 км всегда в наличии на складе
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="btn__container align-center">
            <Button
              variant="contained"
              onClick={this.continue}
              className="next btn"
            >
              Получить каталог
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Welcome;
