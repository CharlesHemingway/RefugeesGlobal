import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import '../styles/why.css';

class Why extends Component {
  render() {
    return (
      <div>
      <Jumbotron className="why-landing">
        <h2>Why Preparalibre?</h2>
          <Row>
            <Col>

      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
            </Col>
            <Col>

      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>

            </Col>
            <Col>


      <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>

            </Col>
          </Row>
        </Jumbotron> 
      </div>
       
    );
  }
}

export default Why;
