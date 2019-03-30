import React from 'react';

import { Button } from 'reactstrap';
import { LogOut } from 'react-feather';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Button className="button" onClick={firebase.doSignOut} >
    <LogOut/>
  </Button>
);

export default withFirebase(SignOutButton);