const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('Connected to Mongodb');
    })
    .catch((err) => console.error(err));
};

app.use(cors());
app.use(express.json());

app.use('/api/user/', userRouter);
app.use('/api/post/', postRouter);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server is starting on port ${process.env.PORT}`);
});
