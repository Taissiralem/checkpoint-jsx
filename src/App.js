import "./App.css";
import { product } from "./Product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [name, setName] = React.useState("");

  return (
    <div>
      <Card>
        <Card.Header>
          <h2>{product.name}</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={12} md={6}>
              <Image image={product.image} />
            </Col>
            <Col xs={12} md={6}>
              <Name name={product.name} />
              <Price price={product.price} />
              <Description description={product.description} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <p>
        Hello, {name || "there !"}{" "}
        {name && <img src={product.img} width="50px" />}
      </p>
    </div>
  );
};

export default App;
