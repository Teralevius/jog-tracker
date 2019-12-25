import React from 'react';

import itemImg from '../../assets/icon.svg';
import './jogs.css';

const JogListItem = ({ id, date, distance, time}) =>{
    const jogDate = new Date(date);
    

    return (
        <div key={id} className='jogsListItem'>
            <img src={itemImg} className='itemImg' alt='Item'/>
            <div className='itemInfo'>
                <p className='dateField'>{`${jogDate.getDay()}.${jogDate.getDay()}.${jogDate.getFullYear()}`}</p>
                <div className='infoField'>
                    <span>Speed:</span>
                    <span>{Math.ceil(distance/time).toString()}</span>
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
    )
};

export default JogListItem;