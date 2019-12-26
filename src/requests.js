const serverURL = 'https://jogtracker.herokuapp.com/api/v1';


export const getToken = (callBackFunc) => fetch(`${serverURL}/auth/uuidLogin`, {
  method: 'POST',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `${encodeURIComponent('uuid')}=${encodeURIComponent('hello')}`,
}).then((response) => response.json())
    .then( (body) => {
      window.localStorage.setItem('access_token', body.response.access_token);
      return getUser(callBackFunc);
    });

export const getJogs = () => fetch(`${serverURL}/data/sync`, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
  },
});

export const getUser = (callBackFunc) => fetch(`${serverURL}/auth/user`, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
  },
}).then((response) => response.json()).then( (body) => {
  window.localStorage.setItem('user', JSON.stringify(body.response));
  return body.response;
}).then(callBackFunc());

export const postJog = (jog) => fetch(`${serverURL}/data/jog`, {
  method: 'POST',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
  },
  body: `${encodeURIComponent('distance')}=${encodeURIComponent(jog.distance)}&${encodeURIComponent('time')}=${encodeURIComponent(jog.time)}&${encodeURIComponent('date')}=${encodeURIComponent(jog.date)}`,
});
