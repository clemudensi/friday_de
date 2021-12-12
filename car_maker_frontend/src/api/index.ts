import axios from 'axios';

const carApi = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
});

export { carApi };