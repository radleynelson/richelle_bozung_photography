import React, { Component } from 'react';
import {Router,BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';
import './App.css';
import Home from './Components/Home';
import OverallPortfolio from './Components/OverallPortfolio.js';
import Contact from './Components/Contact.js';
import About from './Components/About.js';
import TypePortfolio from './Components/TypePortfolio.js';

class App extends Component {
  render() {
    return (
      <section>
        <BrowserRouter>
        <section>
        <NavBar />
          <div className="AppContainer">
            <Switch>
              <Route path='/' component={Home} exact={true} />
              <Route path='/Portfolio' component={OverallPortfolio} exact={true} />
              <Route path='/Contact' component={Contact} exact={true} />
              <Route path='/About' component={About} exact={true} />
              <Route path='/Portfolio/:id' component={TypePortfolio} exact={true} />
            </Switch>
          </div>
          <Footer />
          </section>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
