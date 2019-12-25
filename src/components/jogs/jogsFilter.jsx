import React from 'react';

import InputField from './inputField';
import './jogs.css';

const JogsFilter = ({filterIsOn, onChange}) => (
    filterIsOn ? <div className='jogFilter'>
        <InputField onChange={onChange} name='Date from' />
        <InputField onChange={onChange} name='Date to' />
    </div> : null
);

export default JogsFilter;