const express = require('express');
const globalErrorHandle = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');

// Creat server
const app = express();
app.use(express.json());

//Routes
app.use('/api/v1/users', userRouter);

//Global Error
app.use(globalErrorHandle);

module.exports = app;
