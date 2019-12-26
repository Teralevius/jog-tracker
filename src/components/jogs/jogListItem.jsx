import React from 'react';

import itemImg from '../../assets/icon.svg';
import './jogs.css';

const JogListItem = ({id, date, distance, time}) =>{
  const jogDate = new Date(date*1000);

  return (
    <div key={id} className='jogsListItem'>
      <div className='itemImgWrapper'>
        <img src={itemImg} className='itemImg' alt='Item'/>
      </div>
      <div className='itemInfo'>
        <p className='dateField'>{`${jogDate.getDate()}.${jogDate.getMonth()+1}.${jogDate.getFullYear()}`}</p>
        <div className='infoField'>
          <span>Speed:</span>
          <span>{(isNaN(distance/time) ? 0 : Math.ceil(distance/time)).toString()}</span>
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
};

export default JogListItem;
