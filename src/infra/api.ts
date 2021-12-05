import axios from 'axios';

const apiUrl = 'http://localhost:2333';
// const apiUrl = "https://uwish.david6.fr";


const instance = axios.create({
  baseURL: apiUrl
})

export default instance;
