import axios from 'axios';

const apiUrl = 'http://localhost:2337/api';
// const apiUrl = "https://uwish.david6.fr";

const apiLogged = axios.create({
  baseURL: apiUrl,
});

apiLogged.interceptors.request.use((config) => {
  const user_token = sessionStorage.getItem('USER_TOKEN');
  if (user_token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${user_token}`,
      },
    };
  }
  return { ...config };
});

export default apiLogged;
