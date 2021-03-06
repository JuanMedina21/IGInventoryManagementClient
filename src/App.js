import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxHero from './components/Auth/BoxHero';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

import About from './components/Navbar/About/About';
import Faq from './components/Navbar/FAQ/Faq';
import Contact from './components/Navbar/Contact/Contact';
import Splash from './components/splash/Splash';



class App extends Component {
  constructor() {
    super()
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({ sessionToken: ''});
    localStorage.clear();
  }

  decideViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route exact path="/"><Splash sessionToken={this.state.sessionToken}/></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/faq"><Faq /></Route>
          <Route exact path="/contact"><Contact /></Route>
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route exact path="/"><BoxHero setToken={this.setSessionState}/></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/faq"><Faq /></Route>
          <Route exact path="/contact"><Contact /></Route>
        </Switch>
      )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar clickLogout={this.logout}/>
          {this.decideViews()}
        </div>
      </Router>
    );
  }
}

export default App;