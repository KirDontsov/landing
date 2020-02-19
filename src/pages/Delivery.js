import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import "../scss/Delivery.scss";

import Truck from "../components/icons/Truck";
import WareHouse from "../components/icons/WareHouse";

const Delivery = () => (
  <Fragment>
    <Helmet>
      <title>Доставка</title>
      <meta name="description" content="Доставка" />
    </Helmet>
    <div className="container__margin">
      <Fade bottom delay={700} className="heading">
        <h1 className="title">Доставка</h1>
      </Fade>
      <div className="container">
        <Fade bottom delay={900} cascade>
          <div className="colWrapper">
            <div className="col">
              <div className="iconContainer">
                <Truck />
              </div>
              <h2 className="colTitle">Доставка по Екатеринбургу</h2>
              <p className="colText">
                По Екатеринбургу заказы доставляются нашим курьером в течение
                4-12 часов. Стоимость доставки в пределах города - 350р., за
                пределы города - 500р.
              </p>
            </div>
            <div className="col">
              <div className="iconContainer">
                <Truck />
              </div>
              <h2 className="colTitle">Доставка по России</h2>
              <p className="colText">
                По России заказы доставляются курьерской компанией СДЕК. В
                среднем стоимость доставки составляет 350 руб. Срок доставки 2-5
                дней в зависимости от города.
              </p>
            </div>
            <div className="col">
              <div className="iconContainer">
                <WareHouse />
              </div>
              <h2 className="colTitle">Оплата для всех</h2>
              <p className="colText">
                Мы работаем по 50% или 100% предоплате. После подтверждения
                оплаты, груз отправляется получателю.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </Fragment>
);

export default Delivery;
