import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://covblog-mern-live.herokuapp.com/'

  baseURL: 'http://localhost:9000/',
});

export default instance;
