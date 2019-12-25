import React from 'react';

import InputField from './inputField';
import './jogs.css';

const JogsFilter = () => (
    <div className='jogFilter'>
        <InputField name='Date from' />
        <InputField name='Date to' />
    </div>
);

export default JogsFilter;