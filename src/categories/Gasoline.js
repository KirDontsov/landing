import React from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Categories from "./Categories";
import Sizes from "./Sizes";

const headline = Categories[0].headline;

const Gasoline = () => (
  <Fade bottom delay={700}>
    <Helmet>
      <title>{Categories[0].headline}</title>
      <meta name="description" content={Categories[0].headline} />
    </Helmet>
    <div className="container__margin">
      <div className="heading">
        <h1 className="title">{Categories[0].headline}</h1>
      </div>
      <div className="container">
        {Categories.map(category => {
          return (
            category.index === 0 && (
              <img
                key={category.index}
                className="category__img"
                src={category.src}
                alt={category.headline}
              />
            )
          );
        })}
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Стандарт</Table.HeaderCell>
              <Table.HeaderCell>Категория</Table.HeaderCell>
              <Table.HeaderCell>Наименование</Table.HeaderCell>
              <Table.HeaderCell>Размеры</Table.HeaderCell>
              <Table.HeaderCell>Цена</Table.HeaderCell>
              <Table.HeaderCell>Описание</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Sizes.map((item, i) => {
              return (
                item.category === headline && (
                  <Table.Row key={item.index}>
                    <Table.Cell>{item.index}</Table.Cell>
                    <Table.Cell>{item.standart}</Table.Cell>
                    <Table.Cell>{item.category}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.size}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>{item.desc}</Table.Cell>
                  </Table.Row>
                )
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  </Fade>
);

export default Gasoline;
