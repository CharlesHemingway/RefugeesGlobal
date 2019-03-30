import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Route,
 } from 'react-router-dom';

import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';

import AccountPage from '../Account';
import AdminPage from '../Admin';

import LandingPage from '../Landing';
import HomePage from '../Home';
import AboutPage from '../About';
import ContactPage from '../Contact';
import ProjectsPage from '../Projects';

import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';


const App = (props) => (
  <Router>
    <Fragment>
     <div>
     <Navigation/>
       <Route exact path={ROUTES.LANDING} component={LandingPage} />
      
       <Route path={ROUTES.HOME} component={HomePage} />
       <Route path={ROUTES.ABOUT} component={AboutPage} />      
       <Route path={ROUTES.PROJECTS} component={ProjectsPage} />     
       <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
       <Route path={ROUTES.SIGN_IN} component={SignInPage} />
       <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
       <Route path={ROUTES.ACCOUNT} component={AccountPage} />
       <Route path={ROUTES.ADMIN} component={AdminPage} />
       <Route exact path={ROUTES.CONTACT} component={ContactPage} /> 
             
              
       </div>

    </Fragment>

    <Footer />
  </Router>
);
  

export default withAuthentication(App);
