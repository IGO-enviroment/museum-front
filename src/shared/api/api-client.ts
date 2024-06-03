import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://museum-ekb.ru',
  timeout: 10000,
});
