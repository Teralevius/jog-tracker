import React, { useState } from 'react';
import {HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header/header';
import JogListComponent from './components/jogs/jogListComponent';
import JogAddForm from './components/jogs/jodAddFrom';
import InfoComponent from './components/info/infoComponent';
import LoginComponent from './components/login/loginComponent';
import './App.css';
import './assets/fonts/style.css'

function App(props) {
  const [filterBarIsOn, setDisplayFilterBar] = useState(false);
  const toggleFilterBar = () => setDisplayFilterBar(!filterBarIsOn);

  return (
    <Router >
      <Header filterIconState={filterBarIsOn} filterOnClick={toggleFilterBar} />
      <div className='mainContent'>
          <Switch>
            <Route path='/jogs'>
              <JogListComponent displayFilter={filterBarIsOn} />
            </Route>/>
            <Route path='/addjogs' component={JogAddForm}/>
            <Route path='/info' component={InfoComponent}/>
            <Route path='/contactus' component={InfoComponent}/>
            <Route path='/' exact component={LoginComponent}/>
          </Switch>
       
      </div>      
    </Router>
  );
}

export default App;
