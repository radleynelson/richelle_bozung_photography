import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class NavBar extends React.Component{
  render(){
    return(
      <nav style={{marginTop: '10px', marginBottom: '10px'}} className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <NavLink to="/" className="navbar-brand">
                  <span className='myfont'>Richelle Bozung Photography</span>
                </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="bs-nav-demo">
                <ul className="nav navbar-nav navbar-right">
                    <li className='Nav_Menu_Item'><NavLink to="/">HOME</NavLink></li>
                    <li className='Nav_Menu_Item dropdown'><NavLink className='dropdown-toggle' to='/Portfolio' replace>PORTFOLIO</NavLink></li>
                    <li className='Nav_Menu_Item'><NavLink to="/About">ABOUT</NavLink></li>
                    <li className='Nav_Menu_Item'><NavLink to="/Contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
