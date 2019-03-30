import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, Form,
Input, Button, Alert, FormGroup } from 'reactstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => {
  return (
    <Fragment>
      <h3>PasswordForgetPage</h3>
      <PasswordForgetForm />
    </Fragment>
  );
}

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = () => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render () {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Card className="form-card signup-card">
        <CardBody className="text-center">
          <CardText>Password Reset</CardText>
          <Form>
            <FormGroup>
              <Input 
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                />
            </FormGroup>

            <Button disabled={isInvalid} type="button" onClick={() => this.onSubmit()}>
              Reset My Password
            </Button>

            { error && <Alert className="alert-bt" color="danger">{ error.message }</Alert> }
            
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const PasswordForgetLink = () => (
  <div style={{marginTop:"10px"}}>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </div>
);


const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };

export default PasswordForgetPage;