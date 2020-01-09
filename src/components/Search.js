import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import SearchInput, { createFilter } from "react-search-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import slideData from "../categories/Categories";
import "../scss/Search.scss";

const KEYS_TO_FILTERS = ["headline", "src", "link", "id"];

class Search extends Component {
  handleClick(e) {
    this.props.slide(true);
  }

  toggle() {
    this.props.changeClass(!this.props.addClassSearch);
  }

  searchUpdated(term) {
    this.props.changeSearchTerm(term);
    console.log(this.props.searchTerm);
  }

  render() {
    const filteredSlides = slideData.filter(
      createFilter(this.props.searchTerm, KEYS_TO_FILTERS)
    );

    let boxClass = ["box"];

    if (this.props.addClassSearch) {
      boxClass.push("active");
    }

    return (
      <div className={boxClass.join(" ")} onClick={this.toggle.bind(this)}>
        <FontAwesomeIcon icon={faSearch} className="icon__serch" />
        {this.props.addClassSearch ? (
          <Fragment>
            <SearchInput
              className="search-input"
              onChange={this.searchUpdated().bind(this)}
              placeholder="Поиск"
            />

            <div className="filter_slides">
              {filteredSlides.map(slide => {
                return (
                  <Link
                    to={slide.link}
                    className="link"
                    key={slide.index}
                    onClick={e => this.handleClick(e)}
                  >
                    <div className="slides">
                      <div className="category__title">{slide.headline}</div>
                      <img
                        className="image"
                        src={slide.src}
                        alt={slide.headline}
                      ></img>
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
}

const mapState = state => ({
  addClass: state.shutter.addClass,
  addClassSearch: state.search.addClassSearch,
  searchTerm: state.search.searchTerm
});

const mapDispatch = ({
  shutter: { slide },
  search: { changeSearchTerm, changeClass }
}) => ({
  slide,
  changeSearchTerm,
  changeClass
});

export default connect(mapState, mapDispatch)(Search);
