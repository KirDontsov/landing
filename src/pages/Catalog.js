import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import "../scss/Catalog.scss";
import axios from "axios";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Filters from "../components/Filters";
import { useSelector } from "react-redux";

const Catalog = () => {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [cardsPerPage] = useState(10);
	const [activeClass, setActiveClass] = useState(false);

	const [width, setWidth] = useState(null);
	const [isMobile, setIsMobile] = useState(false);

	const inner = useSelector(state => state.filters.inner);
	const outer = useSelector(state => state.filters.outer);
	const temperature = useSelector(state => state.filters.temperature);
	const lengh = useSelector(state => state.filters.lengh);

	const producer = useSelector(state => state.filters.producer);
	const standart = useSelector(state => state.filters.standart);
	const category = useSelector(state => state.filters.category);
	const type = useSelector(state => state.filters.type);
	const pressureMpa = useSelector(state => state.filters.pressureMpa);
	const pressureAtm = useSelector(state => state.filters.pressureAtm);

	const producerFilterApplied = useSelector(state => state.filters.producerFilterApplied);
	const standartFilterApplied = useSelector(state => state.filters.standartFilterApplied);
	const categoryFilterApplied = useSelector(state => state.filters.categoryFilterApplied);
	const typeFilterApplied = useSelector(state => state.filters.typeFilterApplied);
	const pressureMpaFilterApplied = useSelector(state => state.filters.pressureMpaFilterApplied);
	const pressureAtmFilterApplied = useSelector(state => state.filters.pressureAtmFilterApplied);

	useEffect(
		() => {
			if (window !== "undefined") {
				setWidth(window.innerWidth);
				if (width <= 768) {
					setIsMobile(true);
				}
				if (width > 768) {
					setIsMobile(false);
				}
			}

			const fetchCards = async () => {
				setLoading(true);
				const res = await axios.get("/sizes.json");
				setCards(res.data);
				setLoading(false);
			};

			fetchCards();
			window.addEventListener("resize", () => setWidth(window.innerWidth));
			return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
		},
		[width]
	);

	let filteredCards = [];

	if (cards !== undefined && cards.length !== 0) {
		filteredCards = cards.Catalog.filter(cards => {
			return (
				(producerFilterApplied === true ? cards.country === producer : true) &&
				(standartFilterApplied === true ? cards.standart === standart : true) &&
				(categoryFilterApplied === true ? cards.category === category : true) &&
				(typeFilterApplied === true ? cards.type === type : true) &&
				(pressureMpaFilterApplied === true ? cards.presMpa === pressureMpa : true) &&
				(pressureAtmFilterApplied === true ? cards.presAtm === pressureAtm : true) &&
				cards.inner >= inner[0] &&
				cards.inner <= inner[1] &&
				cards.outer >= outer[0] &&
				cards.outer <= outer[1] &&
				cards.lengh >= lengh[0] &&
				cards.lengh <= lengh[1] &&
				cards.tMax <= temperature
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

	const mobFiltersClick = useCallback(() => {
		setActiveClass(prevState => !prevState);
	}, []);

	const mobFiltersClass = ["mobileFilters"];
	const filtersClass = isMobile ? ["filters"] : ["desctopFilters"];

	if (activeClass) {
		mobFiltersClass.push("active");
		filtersClass.push("active");
	}

	if (!activeClass) {
		mobFiltersClass.filter(item => item !== "active");
		filtersClass.filter(item => item !== "active");
	}

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
						{isMobile && (
							<p className={mobFiltersClass.join(" ")} onClick={mobFiltersClick}>
								Фильтры
							</p>
						)}
						<Filters className={filtersClass.join(" ")} />
					</div>
					<div className="col">
						{cards !== undefined &&
							(currentCards.length < 1 ? (
								<h2 className="alert">Нет товаров попадающих под заданные условия фильтрации</h2>
							) : (
								<Cards cards={currentCards} loading={loading} />
							))}

						<div className="paginationWrap">
							{cards !== undefined && cards.length !== 0 && (
								<Pagination
									cardsPerPage={cardsPerPage}
									totalCards={filteredCards.length}
									paginate={paginate}
									scroll={scrollToTop}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Catalog;
