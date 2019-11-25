import React from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import Bb8 from "../components/Bb8";

const Err = () => (
  <Fade bottom delay={700}>
    <Helmet>
      <title>404</title>
      <meta name="description" content="404" />
    </Helmet>
    <div className="container__margin">
      <h1>Упс... 404 Страница не существует</h1>
      <Bb8 />
    </div>
  </Fade>
);

export default Err;
