import React from 'react';

import logo from '../../assets/logo_bear.png'
import './header.css';
import NavMenu from './navMenu';

const array = [{text: 'JOGS', path:'/jogs'},{text: 'INFO', path:'/info'},{text: 'CONTACT US', path:'/contactus'}]

const Header = () => (
    <div className="header">
        <img className="logo" src={logo} alt='Jog logo'/>
        <NavMenu items={array} />
    </div>
    );

export default Header;