const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log('DB connected');
}).catch((err) => {
  console.log(err);
});

const app = express();
app.use(express.json());
app.use('api/users', userRoute);

app.listen(3001, () => {
  console.log('backend is running on port 3001');
});
