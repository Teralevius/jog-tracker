import React from 'react';
import { NavLink } from 'react-router-dom';

import filterOff from '../../assets/filter.svg';
import filterOn from '../../assets/filter-active.svg';
import './navMenu.css';

const NavMenu = ({ filterIconState,items, filterOnClick }) => (
    <div className='navMenu'>
        {items.map((current, index) => (<NavLink activeClassName='is-active' className='navItem' key={index} to={current.path}>{current.text}</NavLink>) )}
        <div className='imgFilterContainer'>
            <img src={ filterIconState ? filterOn : filterOff } onClick={filterOnClick} alt='Filter' />  
        </div>
        
    </div>
);

export default NavMenu;