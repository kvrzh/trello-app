import axios from 'axios';

const ax = axios.create({
   baseURL: 'https://api.trello.com/1/'
});

export default ax;