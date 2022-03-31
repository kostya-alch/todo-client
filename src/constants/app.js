import axios from 'axios';

export const instance = axios.create({
   baseURL: 'https://alch-todo-backend.herokuapp.com/api/',
   headers: { 'Content-Type': 'application/json' },
});
