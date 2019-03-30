import React, { Component } from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

class Directory extends Component {
  render() {
    return (
       <div>
      <Container>
      <h2>Directorio de Maestros:</h2>
              <Row>
                  <Col>
                    <ListGroup flush>
                      <ListGroupItem disabled tag="a" href="#">CREATIVA</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup flush>
                      <ListGroupItem disabled tag="a" href="#">NEGOCIO</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup flush>
                      <ListGroupItem disabled tag="a" href="#">TECNOLOGÍA</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup flush>
                      <ListGroupItem disabled tag="a" href="#">VIDA</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                  </Col>
              </Row>
      </Container> 
       </div>
       
    );
  }
}

export default Directory;
