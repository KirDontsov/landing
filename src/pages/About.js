import React from "react";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import Svg from "../images/Svg";
import "../scss/About.scss";

// function Svg() {
//   return <Svg />;
// }

const About = () => (
  <Fade bottom delay={700}>
    <Helmet>
      <title>О Нас</title>
      <meta name="description" content="О Нас" />
    </Helmet>
    <div className="container__margin">
      <div className="heading">
        <h1 className="title">О Нас</h1>
      </div>
      <div className="container">
        <p className="text dark">
          Предприятие РТИ-ТОРГ существует на ранке Урала с 2001 года. Основная
          направленность компании - обеспечение предприятий машиностроительной,
          горнодобывающей, нефтегазовой, угольной, строительной и сельского
          хозяйства изделиями из резины, полиуретана, фторопласта, асбеста и
          другой сопутствующей продукцией.
        </p>

        <Svg />
        <h2 className="dark">СЕГОДНЯ РТИ-ТОРГ - ЭТО...</h2>
        <div className="col__wrapper">
          <div className="col">
            <p className="text dark">
              Квалифицированные менеджеры отдела продаж
            </p>
            <p className="text dark">Гарантия качественных поставок</p>
          </div>
          <div className="col">
            <p className="text dark">Широкий ассортимент товара</p>
            <p className="text dark">
              Выбор большинства крупнейших предприятий
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fade>
);

export default About;
