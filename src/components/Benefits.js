import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import "../scss/Benefits.scss";

const NavigationBar = () => (
  <Fragment>
    <div className="container__margin benefits">
      <div className="center col">
        <Fade bottom cascade>
          <div className="benefits">
            <div className="col main">
              <div className="col">
                <FontAwesomeIcon icon={faBullseye} className="icon" />
              </div>
              <div className="col">
                <h2 className="dark">Наши преимущества</h2>
                <p className="text dark">
                  Их нет. Мы обычная компания, которая сама ищет производителей
                  РТИ в разных странах договаривается о сотрудничестве, закупает
                  продукцию в большом объеме, привозит на свой склад в г.
                  Екатеринбург и продает вам, стараясь доставить в срок.
                </p>
              </div>
            </div>
            <div className="col main">
              <div className="col">
                <FontAwesomeIcon icon={faBullseye} className="icon" />
              </div>
              <div className="col">
                <h2 className="dark">Гарантии</h2>
                <p className="text dark">
                  Если вам не понравится качество поставляемой продукции, мы
                  вернем вам деньги, в обмен на возврат товара.
                </p>
              </div>
            </div>
          </div>
          <div className="benefits">
            <div className="col main">
              <div className="col">
                <FontAwesomeIcon icon={faBullseye} className="icon" />
              </div>
              <div className="col">
                <h2 className="dark">Скидки</h2>
                <p className="text dark">
                  Их нет, мы заранее договорились с производителем о самых
                  низких ценах.
                </p>
              </div>
            </div>
            <div className="col main">
              <div className="col">
                <FontAwesomeIcon icon={faBullseye} className="icon" />
              </div>
              <div className="col">
                <h2 className="dark">Доставка</h2>
                <p className="text dark">По всей России.</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </Fragment>
);

export default NavigationBar;
