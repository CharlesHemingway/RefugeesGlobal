import React from 'react';

import classes from './SearchBar.css';

const searchBar = ( props ) => (

	<div className={classes.SearchBar}>
    

     <form method="POST" action="Main.js" id="search">
          <input type="text" name="search" placeholder="when, where, who"/>
          <input type="submit" name="search" value="AID NOW"/>
      </form> 
    
     </div>  
   
);

export default searchBar;