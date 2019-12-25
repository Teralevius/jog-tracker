import React from 'react';
import { useHistory } from 'react-router-dom'

import './login.css';
import bear from '../../assets/bear-face.png';
import Button from '../button/button';
import { login } from '../../requests'



const LoginComponent = (props) => {
    let history = useHistory()
    return (
        <div className="login">
            <img  className='loginImage' src={bear} alt='Login'/>
            <Button onClick={() => login(()=>history.push('/jogs'))} btnName='Let me in'/>
        </div>);
};

export default LoginComponent;