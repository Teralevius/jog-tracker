import React from 'react';
import { NavLink } from 'react-router-dom';

import filterOff from '../../assets/filter.svg';
import filterOn from '../../assets/filter-active.svg';
import menu from '../../assets/menu.png'
import { useWindowDimensions } from '../../utils';
import './navMenu.css';

const NavMenu = ({ filterIconState,items, filterOnClick }) =>{
    const { height, width } = useWindowDimensions();
    console.log(width)
    
    return (
        <div className='navMenu'>
            { width > 768 ? items.map((current, index) => (
                <NavLink activeClassName='is-active' className='navItem' key={index} to={current.path}>{current.text}</NavLink>)) :
                <img src={menu} alt='Menu' />
            }
            <div className='imgFilterContainer'>
                <img src={ filterIconState ? filterOn : filterOff } onClick={filterOnClick} alt='Filter' />  
            </div>
        </div>
)};

export default NavMenu;