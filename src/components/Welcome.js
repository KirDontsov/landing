import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faTruck,
  faWrench,
  faWarehouse
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: purple
  }
});

class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="quiz__section">
          <div className="quiz">
            <h2>
              Ответьте на{" "}
              <span className="red">несколько простых вопросов</span> и получите
              каталог рукавов и шлангов
            </h2>
            <div className="quiz__box">
              <div className="icon__li">
                <div className="col">
                  <FontAwesomeIcon icon={faTruck} className="icon" />
                  <p>Отгрузка день в день, 24/7 и доставка до ТК бесплатно</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faIndustry} className="icon" />
                  <p>Налаженные контакты более чем с 50 поставщиками</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faWrench} className="icon" />
                  <p>Бесплатно соберем рукав в готовое изделие</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faWarehouse} className="icon" />
                  <p>От 10 км всегда в наличии на складе</p>
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
        </div>
      </ThemeProvider>
    );
  }
}

export default Welcome;
