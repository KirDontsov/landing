import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import "../scss/Catalog.scss";
// import Sizes from "../categories/sizes";
import axios from "axios";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Filters from "../components/Filters";
import { useSelector } from "react-redux";

const Catalog = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);

  const inner = useSelector(state => state.filters.inner);
  const outer = useSelector(state => state.filters.outer);
  const producer = useSelector(state => state.filters.producer);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const res = await axios.get("/sizes.json");
      setCards(res.data);
      setLoading(false);
    };

    fetchCards();
  }, []);

  let filteredCards = [];

  if (cards !== undefined && cards.length !== 0) {
    filteredCards = cards.ГОСТ_18698.filter(cards => {
      return (
        cards.country === producer &&
        cards.inner >= inner[0] &&
        cards.inner <= inner[1] &&
        cards.outer >= outer[0] &&
        cards.outer <= outer[1]
      );
    });
  }

  let currentCards = [];
  if (cards !== undefined && cards.length !== 0) {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  }

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const scrollToTop = () => {
    let div = document.querySelector(".wrapper");
    div.scrollTop = 0;
  };

  return (
    <Fragment>
      <Helmet>
        <title>Каталог</title>
        <meta name="description" content="Каталог" />
      </Helmet>
      <div className="container__margin">
        <Fade bottom delay={700} className="heading">
          <h1 className="title">Рукава для всех отраслей промышленности</h1>
        </Fade>

        <div className="containerCol">
          <div className="col filters">
            <Filters />
          </div>
          <div className="col">
            <Fade bottom delay={900} cascade>
              {cards !== undefined ? (
                <Cards cards={currentCards} loading={loading} />
              ) : null}

              <div className="pagination">
                {cards !== undefined && cards.length !== 0 ? (
                  <Pagination
                    cardsPerPage={cardsPerPage}
                    totalCards={filteredCards.length}
                    paginate={paginate}
                    scroll={scrollToTop}
                  />
                ) : null}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Catalog;
