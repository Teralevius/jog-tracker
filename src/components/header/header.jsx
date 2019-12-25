import React from 'react';

import logo from '../../assets/logo_bear.png'
import './header.css';
import NavMenu from './navMenu';

const array = [{text: 'JOGS', path:'/pop'},{text: 'INFO', path:'/'},{text: 'CONTACT US', path:'/'}]

const Header = () => (
    <div className="header">
        <img className="logo" src={logo} alt='Jog logo'/>
        <NavMenu items={array} />
    </div>
    );

export default Header;