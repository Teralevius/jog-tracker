import React from 'react';
import { Link } from 'react-router-dom';

import filter from '../../assets/filter.svg'
import './navMenu.css'

const NavMenu = ({items}) => (
    <div className='navMenu'>
        {items.map((current, index) => (<Link key={index} to={current.path}><a className='navItem' key={index} href='/#'>{current.text}</a></Link>) )}
        <img src={filter} alt='Filter' />
    </div>
);

export default NavMenu;