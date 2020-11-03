const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const postRoute = require('./routes/posts');


// Config dotenv
dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB !!'));

// IMPORT routes
const authRoute = require('./routes/auth');

// Middleware
app.use(express.json());
app.use('/api/posts', postRoute);

// Routes middleware
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server up and running'));
