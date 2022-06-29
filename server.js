const express = require('express');
const path = require('path');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const submit = require('./routes/submit');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/submit', submit);
app.use(
  '/scripts',
  express.static(path.join(__dirname, 'node_modules/axios/dist'))
);

app.use('/', express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
