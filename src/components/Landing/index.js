import React from 'react';
import { Link } from 'react-router-dom';

import { Jumbotron, Button, Container} from 'reactstrap';
import '../../assets/styles/common.css';
//import rg from '../../assets/images/refugeesglobal.png';



import * as ROUTES from '../../constants/routes'; 

const LandingPage = (props) => {
  return (
    <div>
      <Jumbotron fluid className="layout-landing">
        <Container fluid className="container">
   			   <Jumbotron className="inner-layout">
        {/*<hr className="my-2" />*/}
         {/*} <img src={rg} alt="refugeesglobal" className="image hvr-bounce-in" />*/}
          <h1 className="display-3">Refugees Global</h1>
          <h4>Open Source application to help NGOs and volunteers connect & collaborate directly to assist refugees and migrants.</h4>
<hr className="my-4" />
          <p className="lead">¡Join us today! </p>
          <Button color="danger"><Link to={ROUTES.SIGN_UP} className="navlink-landing">Sign Up</Link></Button> {' '}
          <Button><Link to={ROUTES.SIGN_IN} className="navlink-landing">Log in</Link></Button>{' '}
          
          <p className="lead">
          </p>
       </Jumbotron>     
        </Container>    
      </Jumbotron>

    </div>
  );
};


export default LandingPage;