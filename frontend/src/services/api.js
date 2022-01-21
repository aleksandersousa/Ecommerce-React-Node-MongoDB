import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTlhZmQ1Y2YwMTEzOTI5OWYyOTQ4NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjc4OTY3NiwiZXhwIjoxNjQzMDQ4ODc2fQ.1SD4ILBXOVOp95jz6P7rpdyyjLYQ4ZiQIkkcqHa35ik';

export const publicRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}`,
});

export const userRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}`,
  headers: { token: `Bearer ${TOKEN}` },
});
