import React, { Fragment, PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { 
  Form, Input, FormGroup, Button, Alert,
  Card, CardBody, CardText, Jumbotron, Container
} from 'reactstrap';

import '../../assets/styles/common.css';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => {
  return(
    <Fragment>
      <SignUpForm />
    </Fragment>
  );
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  onSubmit = () => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
        })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.SIGN_IN);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
          <Jumbotron fluid className="layout">
        <Container fluid className="container">
           <Jumbotron className="inner-layout">

      <div className="container-fluid">
        <Card className="form-card signup-card">
          <CardBody className="text-center">
            <CardText>Sign Up</CardText>
            <Form>
              <FormGroup>
                <Input 
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Full Name"
                  />
              </FormGroup>
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
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                  />
              </FormGroup>
              <FormGroup>
                <Input 
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm Password"
                  />
              </FormGroup>

              <Button disabled={isInvalid} type="button" onClick={() => this.onSubmit()}>Sign Up</Button>

              { error && <Alert className="alert-bt" color="danger">{ error.message }</Alert> }
              
            </Form>
          </CardBody>
        </Card>

        

      </div>
             </Jumbotron>     
        </Container>
      </Jumbotron>

    );
  }

}

const SignUpLink = () => (
  <div style={{marginTop:"10px"}}>
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  </div>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase); 

export default SignUpPage;

export { SignUpForm, SignUpLink };