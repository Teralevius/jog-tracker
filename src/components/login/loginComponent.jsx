import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './login.css';
import bear from '../../assets/bear-face.png';
import Button from '../button/button';
import {getToken} from '../../requests';


const LoginComponent = ({setLogin}) => {
  const history = useHistory();

  const login = () => {
    setLogin(true);
    getToken(()=>history.push('/jogs'));
  };

  useEffect(() => window.localStorage.removeItem('access_token'), []);

  return (
    <div className="login">
      <img className='loginImage' src={bear} alt='Login'/>
      <Button onClick={login} btnName='Let me in'/>
    </div>);
};

export default LoginComponent;
