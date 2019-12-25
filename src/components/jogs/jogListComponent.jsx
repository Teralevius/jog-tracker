import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import JogListItem from './jogListItem';
import JogsFilter from './jogsFilter';
import {getJogs} from '../../requests';
import add from '../../assets/add.svg';
import './jogs.css';

const JogListComponent = (items) => {
    const [jogs, setJog] = useState([]);
    let history = useHistory()
    const currentUsr = JSON.parse(window.localStorage.getItem('user'));

    useEffect(() => {
        const fetchJogs = async () => {
        const fetchedJogs = await getJogs();
        fetchedJogs.json().then(response => setJog(response.response.jogs))
        }
        fetchJogs();
    },[]);

    return (
        <React.Fragment>
            <JogsFilter />
            <div>
                {jogs.filter(item => item.user_id === currentUsr.id).map((item) => <JogListItem key={item.id} {...item}/>)}
                <img onClick={()=> history.push('/addjogs')} className='addJog' src={add} alt='Add' />
            </div>  
        </React.Fragment>
        )

};

export default JogListComponent;