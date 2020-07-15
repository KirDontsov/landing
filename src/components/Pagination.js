import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../scss/Pagination.scss";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
		pageNumbers.push(i);
	}

	const changeCurrentPageNumber = useCallback(
		number => {
			paginate(number);
			setCurrentPageNumber(number);
		},
		[paginate]
	);

	return (
		<>
			<ul className="pagination">
				{pageNumbers.map((number, i) => (
					<Link
						key={i}
						to="#"
						className="page-link"
						onClick={() => {
							changeCurrentPageNumber(number);
						}}
					>
						<li className="page-item">{number}</li>
					</Link>
				))}
			</ul>
			<p className="currentPage">
				стр. {currentPageNumber} / {pageNumbers.length}
			</p>
		</>
	);
};

export default Pagination;
