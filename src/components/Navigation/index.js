import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button } from 'reactstrap';

import {LogIn, User, Home } from 'react-feather';
import '../../assets/styles/common.css';
import rg from '../../assets/images/refugeesglobal.png';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes'; 
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <Fragment>
    <AuthUserContext.Consumer>
      { 
        authUser => 
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </Fragment>
);


const NavigationAuth = () => (
  <Fragment>
    <Navbar color="light" dark expand="md" className="navbar">
      <NavbarBrand href="/"><img src={rg} alt="refugeesglobal" className="image-4 hvr-bounce-in" /></NavbarBrand>
        <NavItem>
          <div className="navItem-li">
              <Link to={ROUTES.HOME} className="navlink">Constellation</Link>
          </div>
        </NavItem>
        <NavItem>
          <div className="navItem-li">
              <Link to={ROUTES.HOME} className="navlink">Galaxy</Link>
          </div>
        </NavItem>  
        <NavItem>
          <div className="navItem-li">
              <Link to={ROUTES.HOME} className="navlink">Universe</Link>
          </div>
        </NavItem>    

      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>

          <NavItem>
            <div className="navItem-li">
              <Link to={ROUTES.HOME} className="navlink"><Home /></Link>
            </div>
          </NavItem>
          <NavItem>
            <div className="navItem-li">
              <Link to={ROUTES.ACCOUNT} className="navlink"><User /></Link>
            </div>
          </NavItem>
          <NavItem>
            <SignOutButton />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </Fragment>
);

const NavigationNonAuth = () => {

  return(
    <Fragment>
     <Navbar color="light" dark expand="md" className="navbar">
      <NavbarBrand href="/"><img src={rg} alt="refugeesglobal" className="image-4 hvr-bounce-in" /></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <div className="navItem-li">
                <Link to={ROUTES.ABOUT} className="navlink">How It Works</Link>              
            </div>
            </NavItem>
            <NavItem>
              <div className="navItem-li">
                <Link to={ROUTES.SIGN_IN} className="navlink">Log In</Link>
              </div>
            </NavItem>
             <NavItem>
              <div className="navItem-li">
                <Link to={ROUTES.SIGN_UP} className="navlink">Sign Up</Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="navItem-li">
                <Button color="danger" className="button"><Link to={ROUTES.PROJECTS} className="navlink-landing">POST</Link></Button>{' '}
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Navigation;

