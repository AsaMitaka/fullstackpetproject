const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();
const connect = () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log('connected to Mongodb');
    })
    .catch((err) => console.log(err));
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

app.listen(PORT, () => {
  connect();
  console.log(`listening on port ${PORT}`);
});
