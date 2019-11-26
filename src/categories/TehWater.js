import React from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Categories from "./Categories";
import Sizes from "./sizes";

const headline = Categories[1].headline;

const TehWater = () => (
  <Fade bottom delay={700}>
    <Helmet>
      <title>{Categories[1].headline}</title>
      <meta name="description" content={Categories[1].headline} />
    </Helmet>
    <div className="container__margin">
      <div className="heading">
        <h1 className="title">{Categories[1].headline}</h1>
      </div>
      <div className="container">
        {Categories.map(category => {
          return (
            category.index === 1 && (
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

export default TehWater;
