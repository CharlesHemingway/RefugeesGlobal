import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">NGO</NavigationItem>
        <NavigationItem link="/">Volunteer</NavigationItem>
    	<NavigationItem link="/">Register</NavigationItem>
    
    </ul>
);

export default navigationItems;