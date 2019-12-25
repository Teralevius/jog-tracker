import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import JogListItem from './jogListItem';
import {getJogs} from '../../requests';
import add from '../../assets/add.svg';
import './jogs.css';

const JogListComponent = (items) => {
    const [jogs, setJog] = useState([]);
    let history = useHistory()
    useEffect(() => {
        const fetchJogs = async () => {
        const fetchedJogs = await getJogs();
        fetchedJogs.json().then(response => setJog(response.response.jogs))
        }
        fetchJogs();
    },[]);

    console.log(jogs)

    return(
        <div>
            {jogs.filter(item =>(true)).map((item)=> <JogListItem speed={item.speed}/>)}
            <img onClick={()=> history.push('/addjogs')} className='addJog' src={add} alt='Add' />
        </div>)

};

export default JogListComponent;