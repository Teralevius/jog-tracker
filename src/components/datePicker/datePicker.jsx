import React from 'react';

const DatePicker = ({name, onChange}) => (
    <div className='addJogFormField'>
        <span>{name}</span>
        <input onChange={onChange} type="date" name={name.toLowerCase()}></input>
    </div>
);

export default DatePicker;