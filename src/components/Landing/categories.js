import React, { Component } from "react";
import { Container, Row, CardColumns, Badge, Jumbotron } from "reactstrap";
import CategoryCard from "./categorycard";



import imgCard1 from "../../img/img-card (1).jpg";
import imgCard2 from "../../img/img-card (2).jpg";
import imgCard3 from "../../img/img-card (3).jpg";
import imgCard4 from "../../img/img-card (4).jpg";
import imgCard5 from "../../img/img-card (5).jpg";
import imgCard6 from "../../img/img-card (6).jpg";


const cats = [
  {
    id: 1,
    category: ["Todo","Negocios", "Escritura"],
    img: imgCard1,
    alt: "blah blah",
    title: "example",
    subtitle: "example"
  },
  {
    id: 2,
    category: ["Todo","Diseño", "Ilustración","Fotografía y Cine"],
    img: imgCard2,
    alt: "blah blah",
    title: "example",
    subtitle: "example"
  },
  {
    id: 3,
    category: ["Todo","Negocios", "Escritura","Emprendimiento",
    "Fotografía y Cine"],
    img: imgCard3,
    alt: "blah blah",
    title: "example",
    subtitle: "example"
  },
  {
    id: 4,
    category: ["Todo","Tecnología", "Ilustración"],
    img: imgCard4,
    alt: "blah blah",
    title: "example",
    subtitle: "example"
  },
  {
    id: 5,
    category: ["Todo","Negocios", "Escritura",
    "Fotografía y Cine", "Emprendimiento"],
    img: imgCard5,
    alt: "blah blah",
    title: "example",
    subtitle: "example"
  },
  {
    id: 6,
    category: ["Todo","Tecnología", "Ilustración"],
    img: imgCard6,
    alt: "blah blah",
    title: "example",
    subtitle: "example"
  }
];

const itemCategories = [
  "Todo",
  "Diseño",
  "Ilustración",
  "Negocios",
  "Tecnología",
  "Emprendimiento",
  "Escritura",
  "Fotografía y Cine"
];

class Categories extends Component {
  state = {
    cards: [],
    category: "Todo"
  };

  componentDidMount() {
    this.setState({ cards: cats });
  }

  render() {
    const { cards, category } = this.state;
    return (


      <div>
           <Jumbotron fluid className="layout">
        <Container fluid className="container">
           <Jumbotron className="inner-layout">

        <Container>
          <header className="headerTitle text-center">
            <h1>Acceso ilimitado a innumerables clases</h1>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "todo"
                  ? cards.map(categorycard => {
                      return categorycard.category.map(catItem => {
                        return catItem === category ? (
                          <CategoryCard key={categorycard.id} categorycard={categorycard} />
                        ) : null;
                      });
                    })
                  : cards.map(categorycard => (
                      <CategoryCard key={categorycard.id} categorycard={categorycard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
        </Jumbotron>     
        </Container>    
      </Jumbotron>
      </div>
    );
  }
}

export default Categories;
