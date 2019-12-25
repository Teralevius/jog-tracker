import React, { useState } from 'react';
import {HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Header from './components/header/header';
import JogListComponent from './components/jogs/jogListComponent';
import JogAddForm from './components/jogs/jodAddFrom';
import './App.css';
import LoginComponent from './components/login/loginComponent';

function App(props) {
  const [filter, togleFilter] = useState({});

  return (
    <Router >
      <Header filter={setFilter} />
      <div className="mainContent">
          <Switch>
            <Route path="/jogs" component={JogListComponent}/>
            <Route path="/addjogs" component={JogAddForm}/>
            <Route path="/" exact component={LoginComponent}/>
          </Switch>
       
      </div>      
    </Router>
  );
}

export default App;
