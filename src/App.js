import React, {useState, useEffect} from 'react';
import {HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/header/header';
import JogListComponent from './components/jogs/jogListComponent';
import JogAddForm from './components/jogs/jodAddFrom';
import InfoComponent from './components/info/infoComponent';
import LoginComponent from './components/login/loginComponent';
import './App.css';
import './assets/fonts/style.css';

// eslint-disable-next-line require-jsdoc
function App(props) {
  const [filterBarIsOn, setDisplayFilterBar] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const toggleFilterBar = () => setDisplayFilterBar(!filterBarIsOn);

  useEffect(() => {
    if (window.localStorage.getItem('access_token') !== null) setLogin(true);
  }, []);

  return (
    <Router >
      <Header isLogin={isLogin} filterIconState={filterBarIsOn}
        filterOnClick={toggleFilterBar} />
      <div className='mainContent'>
        <Switch>
          <Route path='/jogs'>
            <JogListComponent displayFilter={filterBarIsOn} />
          </Route>
          <Route path='/addjogs' component={JogAddForm}/>
          <Route path='/info' component={InfoComponent}/>
          <Route path='/contactus' component={InfoComponent}/>
          <Route path='/'>
            <LoginComponent setLogin={setLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
