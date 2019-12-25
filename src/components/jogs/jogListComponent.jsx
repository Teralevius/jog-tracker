import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import JogListItem from './jogListItem';
import JogsFilter from './jogsFilter';
import {getJogs} from '../../requests';
import add from '../../assets/add.svg';
import './jogs.css';

const JogListComponent = ({displayFilter}) => {
    const [jogs, setJog] = useState([]);
    const history = useHistory()
    const currentUsr = JSON.parse(window.localStorage.getItem('user'));
    const [jogFilter, setJogFilter] = useState({});

    const handleSetFilter = (event) => setJogFilter({
        ...jogFilter,
        [event.target.name]: event.target.value,
    }); 

    useEffect(() => {
        const fetchJogs = async () => {
        const fetchedJogs = await getJogs();
        fetchedJogs.json().then(response => setJog(response.response.jogs))
        }
        fetchJogs();
    },[]);

    return (
        <React.Fragment>
            <JogsFilter onChange={handleSetFilter} filterIsOn={displayFilter} />
            <div className='listContainer'>
                {jogs.filter(item => item.user_id === currentUsr.id).map((item) => <JogListItem key={item.id} {...item}/>)}
                <img onClick={()=> history.push('/addjogs')} className='addJog' src={add} alt='Add' />
            </div>  
        </React.Fragment>
        )

};

export default JogListComponent;