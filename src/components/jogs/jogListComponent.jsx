import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import JogListItem from './jogListItem';
import JogsFilter from './jogsFilter';
import {getJogs} from '../../requests';
import add from '../../assets/add.svg';
import {toDate} from '../../utils';
import './jogs.css';

const JogListComponent = ({displayFilter}) => {
  const [jogs, setJog] = useState([]);
  const history = useHistory();
  const currentUsr = JSON.parse(window.localStorage.getItem('user'));
  const [jogFilter, setJogFilter] = useState({'date from': '', 'date to': ''});
  const handleSetFilter = (event) => setJogFilter({
    ...jogFilter,
    [event.target.name]: event.target.value,
  });
  const filterJog = (item) => {
    const jogDate = new Date(item.date*1000);
    const startFilterDate = toDate(jogFilter['date from']);
    const endFilterDate = toDate(jogFilter['date to']);
    return currentUsr === item.user_id && startFilterDate <= jogDate && jogDate < endFilterDate;
  };

  const getFiltredJogs = () => (jogFilter['date from']!=='' &&
    jogFilter['date to']!=='') ? jogs.filter((item) => filterJog(item)): jogs;

  useEffect(() => {
    const fetchJogs = async () => {
      const fetchedJogs = await getJogs();
      fetchedJogs.json().then((response) => setJog(response.response.jogs));
    };
    fetchJogs();
  }, []);
  return (
    <React.Fragment>
      <JogsFilter onChange={handleSetFilter} filterIsOn={displayFilter} />
      <div className='listContainer'>
        {getFiltredJogs().map((item) => <JogListItem key={item.id} {...item}/>)}
        <img onClick={()=> history.push('/addjogs')} className='addJog' src={add} alt='Add' />
      </div>
    </React.Fragment>
  );
};

export default JogListComponent;
