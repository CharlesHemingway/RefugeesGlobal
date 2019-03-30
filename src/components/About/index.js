import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../../assets/styles/common.css';

const AboutPage = () => {

  return(
  	<div>
  <Jumbotron fluid className="layout">
        <Container fluid className="container">
      <Jumbotron className="inner-layout-2">
              
			  <div>
    
     <h3>About</h3>
      <p className="lead">
       </p> 
      <p className="lead">
        <b>The Refugees Global Application will allow migrants, refugees, volunteers and aid workers to contact offical NGOs or working groups in their region or worldwide in order to organize mass collaboration efforts and strigmergicly get aid where it is most urgently needed.</b>
      </p> 
       </div>
    </Jumbotron>
        </Container>
      </Jumbotron>
    </div>
  );
}


export default AboutPage;