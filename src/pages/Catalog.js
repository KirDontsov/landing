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
  const temperature = useSelector(state => state.filters.temperature);
  const lengh = useSelector(state => state.filters.lengh);

  const producer = useSelector(state => state.filters.producer);
  const standart = useSelector(state => state.filters.standart);
  const category = useSelector(state => state.filters.category);
  const pressureMpa = useSelector(state => state.filters.pressureMpa);
  const pressureAtm = useSelector(state => state.filters.pressureAtm);

  const producerFilterApplied = useSelector(
    state => state.filters.producerFilterApplied
  );
  const standartFilterApplied = useSelector(
    state => state.filters.standartFilterApplied
  );
  const categoryFilterApplied = useSelector(
    state => state.filters.categoryFilterApplied
  );
  const pressureMpaFilterApplied = useSelector(
    state => state.filters.pressureMpaFilterApplied
  );
  const pressureAtmFilterApplied = useSelector(
    state => state.filters.pressureAtmFilterApplied
  );
  const temperatureFilterApplied = useSelector(
    state => state.filters.temperatureFilterApplied
  );
  const rangeFilterApplied = useSelector(
    state => state.filters.rangeFilterApplied
  );

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
    filteredCards = cards.Catalog.filter(cards => {
      if (producerFilterApplied === true) {
        return (
          cards.country == producer &&
          cards.inner >= inner[0] &&
          cards.inner <= inner[1] &&
          cards.outer >= outer[0] &&
          cards.outer <= outer[1] &&
          cards.lengh >= lengh[0] &&
          cards.lengh <= lengh[1] &&
          cards.tMax <= temperature
        );
      } else if (standartFilterApplied === true) {
        return (
          cards.standart == standart &&
          cards.inner >= inner[0] &&
          cards.inner <= inner[1] &&
          cards.outer >= outer[0] &&
          cards.outer <= outer[1] &&
          cards.lengh >= lengh[0] &&
          cards.lengh <= lengh[1] &&
          cards.tMax <= temperature
        );
      } else if (categoryFilterApplied === true) {
        return (
          cards.category == category &&
          cards.inner >= inner[0] &&
          cards.inner <= inner[1] &&
          cards.outer >= outer[0] &&
          cards.outer <= outer[1] &&
          cards.lengh >= lengh[0] &&
          cards.lengh <= lengh[1] &&
          cards.tMax <= temperature
        );
      } else if (pressureMpaFilterApplied === true) {
        return (
          cards.presMpa == pressureMpa &&
          cards.inner >= inner[0] &&
          cards.inner <= inner[1] &&
          cards.outer >= outer[0] &&
          cards.outer <= outer[1] &&
          cards.lengh >= lengh[0] &&
          cards.lengh <= lengh[1] &&
          cards.tMax <= temperature
        );
      } else if (pressureAtmFilterApplied === true) {
        return (
          cards.presAtm == pressureAtm &&
          cards.inner >= inner[0] &&
          cards.inner <= inner[1] &&
          cards.outer >= outer[0] &&
          cards.outer <= outer[1] &&
          cards.lengh >= lengh[0] &&
          cards.lengh <= lengh[1] &&
          cards.tMax <= temperature
        );
      } else if (rangeFilterApplied === true) {
        return (
          cards.inner >= inner[0] &&
          cards.inner <= inner[1] &&
          cards.outer >= outer[0] &&
          cards.outer <= outer[1] &&
          cards.lengh >= lengh[0] &&
          cards.lengh <= lengh[1] &&
          cards.tMax <= temperature
        );
      }
      return cards;
    });
  }
  console.log(filteredCards);

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
