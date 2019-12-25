const serverURL = 'https://jogtracker.herokuapp.com/api/v1';


export const login = (func) => fetch(`${serverURL}/auth/uuidLogin`, {
    method: 'POST',
    cache: 'no-cache',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `${encodeURIComponent('uuid')}=${encodeURIComponent('hello')}`
}).then(response => response.json())
.then(body =>{ 
    window.localStorage.setItem('access_token', body.response.access_token)
    return getUser();
}).then(func());

export const getJogs = () => fetch(`${serverURL}/data/sync`, {
    method: 'GET',
    cache: 'no-cache',
    headers:{
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    }
});

export const getUser = () => fetch(`${serverURL}/auth/user`, {
    method: 'GET',
    cache: 'no-cache',
    headers:{
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    }
}).then(response => response.json()).then( body => {
    window.localStorage.setItem('user', JSON.stringify(body.response));
    return body.response;
});