import React, {useEffect, useState} from 'react';
import NewsHS from './components/NewsHS';
import NewsIL from './components/NewsIL';
import NewsIS from './components/NewsIS';
import NewsYLE from './components/NewsYLE';
import NewsKL from './components/NewsKL';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return ( 
    <Router>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/il" component={NewsIL}/>
        <Route path="/hs" component={NewsHS}/>
        <Route path="/is" component={NewsIS}/>
        <Route path="/yle" component={NewsYLE}/>
        <Route path="/kl" component={NewsKL}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
