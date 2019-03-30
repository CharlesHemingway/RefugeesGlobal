import React from 'react';

import Search from '../Search';

import { Jumbotron, Button, Container} from 'reactstrap';
import '../../assets/styles/common.css';



import { AuthUserContext, withAuthorization } from '../Session';


const HomePage = (props) => {
  return (
    <AuthUserContext.Consumer>
    {authUser => (
    <div>
      <Jumbotron fluid className="layout">
        <Container fluid className="container">
   			   <Jumbotron className="inner-layout">
        {/*<hr className="my-2" />*/}
          {/*<img src={rg} alt="refugeesglobal" className="image hvr-bounce-in" />*/}
          <h1 className="display-3">Welcome to Refugees Global!</h1>
          <Search />
          <p className="lead">Volunteer • Teach • Amplify  </p>
          <hr className="my-2" />

          </Jumbotron>     
        </Container>
      </Jumbotron>
    </div>
     )}
  </AuthUserContext.Consumer>
  );
};


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);