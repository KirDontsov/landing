import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";

const Delivery = () => (
  <Fragment>
    <Helmet>
      <title>Доставка</title>
      <meta name="description" content="Доставка" />
    </Helmet>
    <div className="container__margin">
      <Fade bottom delay={700} className="heading">
        <h1 className="title">Hello From Delivery</h1>
      </Fade>
      <div className="container">
        <Fade bottom delay={900} className="text dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt
          mollitia animi consequuntur perferendis, ipsa impedit? Tempore
          nostrum, voluptate labore laboriosam quam cumque autem, magnam sit,
          veritatis at assumenda a.
        </Fade>
      </div>
    </div>
  </Fragment>
);

export default Delivery;
