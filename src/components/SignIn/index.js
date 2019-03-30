import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import '../../assets/styles/common.css';
import { Container, Form, Card, CardBody, CardText,
FormGroup, Input, Button, Alert, Jumbotron } from 'reactstrap';


import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';



const SignInPage = () => {
  return(
    <Fragment >
    <Jumbotron fluid className="layout">
        <Container fluid className="container">
           <Jumbotron className="inner-layout">

    <Container className="signin-container">
      <SignInForm />
    </Container>
     </Jumbotron>     
        </Container>
      </Jumbotron>
    
    </Fragment>
  );
}

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <Card className="form-card signup-card">
        <CardBody className="text-center">
          <CardText>Sign In</CardText>
          <Form>
            <FormGroup>
              <Input 
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                />
            </FormGroup>
            <FormGroup>
              <Input 
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                />
            </FormGroup>

            <Button disabled={isInvalid} type="button" onClick={() => this.onSubmit()}>Sign In</Button>

            <SignUpLink />   
            <PasswordForgetLink />

            { error && <Alert className="alert-bt" color="danger">{ error.message }</Alert> }
            
          </Form>
        </CardBody>
      </Card>
    
      
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;