import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-api-endpoint.com',
  timeout: 3000,
  headers: {'Content-Type': 'application/json'}
});

export default instance;