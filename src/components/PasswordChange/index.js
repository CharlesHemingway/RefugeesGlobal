import React, { PureComponent } from 'react';

import { Card, CardBody, CardText, Button, FormGroup,
Form, Input, Alert } from 'reactstrap';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

// const PasswordChangePage = () => {

//   return(
//     <Fragment>
//       <h3>PasswordChangePage</h3>
//     </Fragment>
//   );
// }

class PasswordChangeForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }



  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return(
      <div className="container-fluid">
        <Card className="form-card signup-card">
          <CardBody className="text-center">
            <CardText>Password Change</CardText>
            <Form>
              <FormGroup>
                <Input 
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="New Password"
                  />
              </FormGroup>
              <FormGroup>
                <Input 
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm New Password"
                  />
              </FormGroup>

              <Button disabled={isInvalid} type="button" onClick={() => this.onSubmit()}>
                Reset My Password
              </Button>

              { error && <Alert className="alert-bt" color="danger">{ error.message }</Alert> }
              
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default withFirebase(PasswordChangeForm);