import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTlhZmQ1Y2YwMTEzOTI5OWYyOTQ4NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjcwNDk0NiwiZXhwIjoxNjQyOTY0MTQ2fQ.sCIyQs1spxPqk1XYidM9hXymr4uxfFuqBmfbwj1zuwg';

export const publicRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}`,
});

export const userRequest = axios.create({
  baseURL: `${process.env.REACT_APP_API_ADDRESS}`,
  header: { token: `Bearer ${TOKEN}` },
});
