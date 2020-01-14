import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import Categories from "./Categories";
import axios from "axios";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

const Food = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);

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
      return cards.category === "Рукава для пищевых продуктов";
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

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <Fade bottom delay={700}>
      <Helmet>
        <title>Рукава для пищевых продуктов</title>
        <meta name="description" content="Рукава для пищевых продуктов" />
      </Helmet>
      <div className="container__margin">
        <div className="heading">
          <h1 className="title">Рукава для пищевых продуктов</h1>
        </div>

        <div className="container">
          {cards !== undefined ? (
            <Cards cards={currentCards} loading={loading} />
          ) : null}
          <div className="pagination paginationCategory">
            {cards !== undefined && cards.length !== 0 ? (
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={filteredCards.length}
                paginate={paginate}
                scroll={scrollToTop}
              />
            ) : null}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Food;
