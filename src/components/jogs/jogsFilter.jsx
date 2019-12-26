import React from 'react';

import DatePicker from '../datePicker/datePicker';
import './jogs.css';

const JogsFilter = ({filterIsOn, onChange}) => (
    filterIsOn ? <div className='jogFilter'>
      <DatePicker onChange={onChange} name='Date from' />
      <DatePicker onChange={onChange} name='Date to' />
    </div> : null
);

export default JogsFilter;
