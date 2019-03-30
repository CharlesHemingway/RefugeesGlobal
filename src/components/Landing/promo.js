import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';
import '../styles/promo.css';

class Promo extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="promo-landing">
        
        	<h2>Promo Goes Here</h2>

        </Jumbotron>  
      </div>
       
    );
  }
}

export default Promo;
