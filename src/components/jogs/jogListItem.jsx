import React from 'react';

import itemImg from '../../assets/icon.svg'
import './jogs.css';

const JogListItem = ({ speed, date, distance, time}) => (
    <div className='jogsListItem'>
        <img src={itemImg} className='itemImg' alt='Item'/>
        <div className='itemInfo'>
            <p className='dateField'>{date}</p>
            <div className='infoField'>
                <span>Speed:</span>
                <span>{speed}</span>
            </div>
            <div className='infoField'>
                <span>Distance:</span>
                <span>{distance}</span>
            </div>
            <div className='infoField'>
                <span>Time:</span>
                <span>{time}</span>
            </div>
        </div>
    </div>
);

export default JogListItem;