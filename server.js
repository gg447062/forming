const express = require('express');
const path = require('path');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/submit', require('./routes/submit'));
app.use(
  '/scripts',
  express.static(path.join(__dirname, 'node_modules/axios/dist'))
);

app.use('/mint', express.static(path.join(__dirname, '/public/mint.html')));

app.use('/', express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
