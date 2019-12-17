import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Svg from "../images/Svg";
import "../scss/About.scss";

const About = () => (
  <Fragment>
    <Helmet>
      <title>О Нас</title>
      <meta name="description" content="О Нас" />
    </Helmet>
    <div className="container__margin">
      <Fade bottom delay={700} className="heading">
        <h1 className="title">О Нас</h1>
      </Fade>
      <div className="container">
        <Fade bottom delay={900} className="text dark">
          Предприятие РТИ-ТОРГ существует на ранке Урала с 2001 года. Основная
          направленность компании - обеспечение предприятий машиностроительной,
          горнодобывающей, нефтегазовой, угольной, строительной и сельского
          хозяйства изделиями из резины, полиуретана, фторопласта, асбеста и
          другой сопутствующей продукцией.
        </Fade>

        <Fade bottom delay={1200} className="heading">
          <Svg />
        </Fade>

        <Fade bottom delay={300}>
          <h2 className="dark">СЕГОДНЯ РТИ-ТОРГ - ЭТО...</h2>
        </Fade>
        <div className="col__wrapper">
          <Fade left delay={500} className="col">
            <p className="text dark">
              Квалифицированные менеджеры отдела продаж
            </p>
            <p className="text dark">Гарантия качественных поставок</p>
          </Fade>
          <Fade right delay={500} className="col">
            <p className="text dark">Широкий ассортимент товара</p>
            <p className="text dark">
              Выбор большинства крупнейших предприятий
            </p>
          </Fade>
        </div>
      </div>
    </div>
  </Fragment>
);

export default About;
