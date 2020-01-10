import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../scss/Catalog.scss";
import { connect } from "react-redux";

class Cards extends Component {
  // const active = useSelector(state => state.callBack.active);
  // const addClass = useSelector(state => state.callBack.addClass);

  // const changeClass = useDispatch(state => state.callBack.addClass);
  // const changeActive = useDispatch(state => state.callBack.active);
  // = ({ cards, loading }) =>

  openModal(active, addClass) {
    console.log("click");
    this.props.changeClass(!this.props.addClass);
    this.props.changeActive(!this.props.active);
  }

  render() {
    const { cards, loading } = this.props;
    if (loading) {
      return <h2>Загрузка...</h2>;
    }
    return (
      <Fragment>
        {cards.map((card, i) => (
          <Link to="#" key={i} className="catalog__card">
            <div className="catalog__card__img"></div>
            <div className="catalog__card__content">
              <h2 className="catalog__card__header">
                {card.name + ", " + card.size + ", "}
                {"Ø" +
                  card.inner +
                  "x" +
                  card.outer +
                  "мм, " +
                  card.standart +
                  ", " +
                  card.country}
              </h2>
              <div className="catalog__card__desc">{card.desc}</div>
              <div className="catalog__btn" onClick={() => this.openModal()}>
                Оставить заявку
              </div>
            </div>
          </Link>
        ))}
      </Fragment>
    );
  }
}

const mapState = state => ({
  addClass: state.callBack.addClass,
  active: state.callBack.active
});

const mapDispatch = ({ callBack: { changeClass, changeActive } }) => ({
  changeClass,
  changeActive
});

export default connect(mapState, mapDispatch)(Cards);
