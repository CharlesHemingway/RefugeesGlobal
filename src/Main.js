import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import './nav.css';
import './logo.css';
import './motto.css';
import './slider.css';
import './searchbar.css';


class Main extends Component {
  render() {
    return (
      <div className="Main">
      <div className="navbar clearfix">
      <img src={logo} className="logo" alt="Refugees Global" /> 
       <div id="nav-search-wrapper">
        <form method="GET" action="Main.js">
          <input type="text" name="search" 
          id="nav-search"placeholder="search"/>
        </form>          
      </div> 
    <ul>
  <li><a href="#">Request</a></li>
  <li><a href="#">Offer</a></li>
  <li><a href="#">Help</a></li>
  <li><a href="#">Sign Up</a></li>
  <li><a href="#">Login</a></li>
    </ul>
</div>
      <div className="Main-header">
       <div id="motto-wrapper">
          <div className="row">
  <p id="motto">Welcome to <span>Refugees Global</span> the app to help you help them.<span> Join us today</span>!</p>
          </div>
     <div id="searchbar">
     <div className="row">

     <form method="POST" action="Main.js" id="search">
          <input type="text" name="search" placeholder="when, where, who"/>
          <input type="submit" name="search" value="AID NOW"/>
      </form> 
     </div>
     </div>  
  <div id="display-sliders-wrapper">
<div className="row">
<h3 className="ds-title">Helping Hands</h3>
<div className="display-slider"><div className="ds-div">
<p>TEST 1</p>
</div><div className="ds-div">
<p>TEST 2</p>
</div><div className="ds-div">
<p>TEST 3</p>
</div><div className="ds-div">
<p>TEST 4</p>
</div>
</div>

<h3 className="ds-title">EVENTS</h3>
<div className="display-slider"><div className="ds-div">
<p>TEST 5</p>
</div><div className="ds-div">
<p>TEST 6</p>
</div><div className="ds-div">
<p>TEST 7</p>
</div><div className="ds-div">
<p>TEST 8</p>
</div>
</div>


<h3 className="ds-title">ORGANIZERS</h3>
<div className="display-slider"><div className="ds-div">
<p>TEST 9</p>
</div><div className="ds-div">
<p>TEST 10</p>
</div><div className="ds-div">
<p>TEST 11</p>
</div><div className="ds-div">
<p>TEST 12</p>
</div>
</div>

<h3 className="ds-title"> AID SPOTS</h3>
<div className="display-slider"><div className="ds-div">
<p>TEST 13</p>
</div><div className="ds-div">
<p>TEST 14</p>
</div><div className="ds-div">
<p>TEST 15</p>
</div><div className="ds-div">
<p>TEST 16</p>
</div>
</div>

</div>
</div>

        </div>
       </div>  

<div className="Main-footer">
<p><center> copyright © 2017 Sysoso</center></p>
</div>


  </div>
    

    );
  }
}

export default Main;
