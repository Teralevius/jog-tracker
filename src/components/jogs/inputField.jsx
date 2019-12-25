import React from 'react';

const InputField = ({name, onChange}) => (
    <div className='addJogFormField'>
        <span>{name}</span>
        <input onChange={onChange}type='text' name={name.toLowerCase()}></input>
    </div>
);

export default InputField;