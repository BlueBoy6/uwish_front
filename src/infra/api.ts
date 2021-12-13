import axios from 'axios';

const apiUrl = 'http://localhost:2337/api';
// const apiUrl = "https://uwish.david6.fr";


export default axios.create({
  baseURL: apiUrl
});
