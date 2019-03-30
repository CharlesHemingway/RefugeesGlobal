import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/common.css';
//import rg from '../../assets/images/refugeesglobal.png';



import * as ROUTES from '../../constants/routes'; 


class Footer extends Component {
  render() {
    return (
      <div>  
         <footer className="footer">
          <Link to={ROUTES.SIGN_UP} className="navlink-landing">Sign Up</Link>
          <Link to={ROUTES.SIGN_IN} className="navlink-landing">Log in</Link>
          
        <p> RefugeesGlobal ©, Inc. 2019</p>
          </footer>
      </div>
    );
  }
}

export default Footer;
