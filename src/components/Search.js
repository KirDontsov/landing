import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import SearchInput, { createFilter } from "react-search-input";
import slideData from "../categories/Categories";
import "../scss/Search.scss";

const KEYS_TO_FILTERS = ["headline", "src", "link", "id"];

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			addClass: false
		};
		this.searchUpdated = this.searchUpdated.bind(this);
	}

	toggle() {
		this.setState({ addClass: !this.state.addClass });
	}

	render() {
		const filteredSlides = slideData.filter(
			createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
		);

		let boxClass = ["box"];

		if (this.state.addClass) {
			boxClass.push("active");
		}

		return (
			<div className={boxClass.join(" ")} onClick={this.toggle.bind(this)}>
				{this.state.addClass ? (
					<Fragment>
						<SearchInput
							className="search-input"
							onChange={this.searchUpdated}
							placeholder="Поиск"
						/>
						<div className="filter_slides">
							{filteredSlides.map((slide) => {
								return (
									<Link to={slide.link} className="link" key={slide.index}>
										<div className="slides">
											<div className="category__title">{slide.headline}</div>
											<img className="image" src={slide.src} alt={slide.headline}></img>
										</div>
									</Link>
								);
							})}
						</div>
					</Fragment>
				) : (
					<SearchInput
						className="search-input"
						onChange={this.searchUpdated}
						placeholder="Поиск"
					/>
				)}
			</div>
		);
	}

	searchUpdated(term) {
		this.setState({ searchTerm: term });
	}
}

export default Search;
