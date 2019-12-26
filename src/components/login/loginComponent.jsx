import React, { useDebugValue, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import './login.css';
import bear from '../../assets/bear-face.png';
import Button from '../button/button';
import { getToken } from '../../requests'



const LoginComponent = ({setLogin}) => {
    let history = useHistory();

    const login = () => {
        setLogin(true);
        getToken(()=>history.push('/jogs'));
    }

    useEffect(() => setLogin(false),[])

    return (
        <div className="login">
            <img  className='loginImage' src={bear} alt='Login'/>
            <Button onClick={login} btnName='Let me in'/>
        </div>);
};

export default LoginComponent;