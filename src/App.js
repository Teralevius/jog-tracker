import React, { useState } from 'react';
import {HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header/header';
import JogListComponent from './components/jogs/jogListComponent';
import JogAddForm from './components/jogs/jodAddFrom';
import './App.css';
import LoginComponent from './components/login/loginComponent';

function App(props) {
  const [filterBarIsOn, setDisplayFilterBar] = useState(false);
  const toggleFilterBar = () => setDisplayFilterBar(!filterBarIsOn);

  return (
    <Router >
      <Header filterOnClick={toggleFilterBar} />
      <div className="mainContent">
          <Switch>
            <Route path="/jogs">
              <JogListComponent displayFilter={filterBarIsOn} />
            </Route>/>
            <Route path="/addjogs" component={JogAddForm}/>
            <Route path="/" exact component={LoginComponent}/>
          </Switch>
       
      </div>      
    </Router>
  );
}

export default App;
