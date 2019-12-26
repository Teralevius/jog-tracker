import React from 'react';

import cancle from '../../assets/cancel.svg';
import Button from '../button/button';
import InputField from './inputField';
import DatePicker from '../datePicker/datePicker';
import { useHistory } from 'react-router-dom';
import { postJog } from '../../requests'

const JogAddFrom = () => {
    const [newJog, setNewJog] = React.useState({});
    const history = useHistory()

    const handleInputChange = (event) => setNewJog({
        ...newJog,
        [event.target.name]: event.target.value,
    });

    return(
        <div className='addFormContainer'>
            <img onClick={() => history.push('/jogs')} className='cancleJogAddForm' src={cancle} alt='cancle'/>
            <div className='addJogForm'>
                <div>
                    <InputField onChange={handleInputChange} name='Distance' />
                    <InputField onChange={handleInputChange} name='Time' />
                    <DatePicker onChange={handleInputChange} name='Date' />
                </div>
                <Button onClick={()=> postJog(newJog)} btnName='Save'/>
            </div>
        </div>
    )
}

export default JogAddFrom;