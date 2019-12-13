import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import MyMap from "../components/Map";
import { YMaps } from "react-yandex-maps";
import "../scss/Contacts.scss";

const Contacts = () => (
  <Fragment>
    <Helmet>
      <title>Контакты</title>
      <meta name="description" content="Контакты" />
    </Helmet>
    <div className="container__margin">
      <Fade bottom delay={700} className="heading">
        <h1 className="title">Контакты</h1>
      </Fade>

      <div className="container">
        <Fade bottom delay={900}>
          <h2 className="sub__title dark">Торговый Дом "РТИ-Торг"</h2>
        </Fade>
        <Fade bottom delay={1200}>
          <h3 className="sub__title dark">Адрес</h3>
          <p className="text dark">620087, г. Екатеринбург, Межевая, 11</p>
          <h3 className="sub__title dark">E-mail</h3>
          <p className="text dark">info@rti-torg.ru</p>
          <h3 className="sub__title dark">Телефоны</h3>
          <p className="text dark">+7 (343) 385-58-57 - многоканальный</p>
          <h3 className="sub__title dark">Режим работы</h3>
          <p className="text dark">
            С 9:00 до 17:30 Выходные дни — суббота, воскресенье
          </p>
        </Fade>
        <Fade bottom delay={1500}>
          <YMaps>
            <MyMap />
          </YMaps>
        </Fade>
      </div>
    </div>
  </Fragment>
);

export default Contacts;
