import React, { Fragment } from 'react';

import { Jumbotron, Container} from 'reactstrap';
import '../../assets/styles/common.css';


import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <Fragment>
         <Jumbotron fluid className="layout">
       	    <Container fluid className="container">
   			   <Jumbotron className="inner-layout">

        <h3>Account: {authUser.email}</h3>
        <PasswordForgetForm />
        <PasswordChangeForm />

 			   </Jumbotron>     
      	    </Container>
         </Jumbotron>

      </Fragment>
    )}
  </AuthUserContext.Consumer>
);


const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);