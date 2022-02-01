import axios from 'axios';

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}`,
});

export const userRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}`,
  headers: { token: `Bearer ${TOKEN}` },
});
