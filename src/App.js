import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import NewsSection from './Components/NewsSection';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  apikey=process.env.REACT_APP_APIKEY_NEWS_WEBSITE;
    render() { 
     return( 
      <>
      <Router>
        <Switch>
          <Route key='general' exact path='/'>
            <Navbar />
           <NewsSection apiKey={this.apikey} category='general'/>
          </Route>
          <Route key='business' exact path='/business'>
            <Navbar />
           <NewsSection apiKey={this.apikey} category='business'/>
          </Route>
          <Route key='entertainment' exact path='/entertainment'>
           <Navbar /> 
           <NewsSection apiKey={this.apikey} category='entertainment'/>
          </Route>
          <Route key='health' exact path='/health'>
            <Navbar /> 
            <NewsSection apiKey={this.apikey} category='health'/>
          </Route>
          <Route key='science' exact path='/science'>
            <Navbar />
            <NewsSection apiKey={this.apikey} category='science'/>
          </Route>
          <Route key='sports' exact path='/sports'>
            <Navbar />
            <NewsSection apiKey={this.apikey} category='sports'/>
          </Route>
          <Route key='technology' exact path='/technology'>
            <Navbar />
            <NewsSection apiKey={this.apikey} category='technology'/>
          </Route>
        </Switch>
      </Router>
      </>
     )
    }
}

export default App;