import React from 'react';
import { Jumbotron, Container, Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import Navigation from '../Navigation';
import '../../assets/styles/common.css';

const AboutPage = () => {

  return(
    <div>
  <Jumbotron fluid className="layout">
        <Container fluid className="container">
      <Jumbotron className="inner-layout">
               <Navigation/>
               
               <hr className="my-2" />

        <div>
     <h1> Contact Me  </h1>
     <p className="lead"> Feel free to get in touch. You can email me at:

ossiel@riseup.net, or fill out the form below, I'll get back to you ASAP. </p>
    
            <Form 
          name="contact"
          action="https://formspree.io/ossiel@riseup.net" 
          method="POST">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail"></Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName"></Label>
              <Input type="name" name="name" id="exampleName" placeholder="name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleNote"></Label>
          <Input type="text" name="reason" id="exampleReason" placeholder="reason"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleNote"></Label>
          <Input type="text" name="note" id="exampleNote" placeholder="note"/>
        </FormGroup>
        
               <hr className="my-2" />

        <Button className="button hvr-bounce-in">submit</Button>
      </Form>














    </div>
    </Jumbotron>
        </Container>
      </Jumbotron>
    </div>
  );
}


export default AboutPage;