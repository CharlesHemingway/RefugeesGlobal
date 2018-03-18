import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SearchBar from '../../components/Navigation/SearchBar/SearchBar';
import Slider from '../../components/Navigation/Slider/Slider';
import Motto from '../../components/UI/Motto/Motto';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }




      

    render () {
        return (
          
          <Aux>
          
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
            <div className={classes.Header}>

           
              
              <video className={classes.video} loop autoPlay>
    <source src="https://ak9.picdn.net/shutterstock/videos/4485149/preview/stock-footage-charity-volunteers-and-community-giving-a-helping-hand.mp4" type="video/mp4" /></video>
             <Motto />
              <SearchBar/>

            </div> 
          <div className={classes.Container}>
              <Slider/>    
          </div>

      <div className={classes.Footer}>
        <p><center> copyright © 2017 Sysoso</center></p>

      </div>
     
        </Aux>
       
        )
    }
}

export default Layout;