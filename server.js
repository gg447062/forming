const express = require('express');
const path = require('path');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
    } else {
      next();
    }
  });
}

app.use('/submit', require('./routes/submit'));
app.use(
  '/scripts',
  express.static(path.join(__dirname, 'node_modules/axios/dist'))
);

app.use('/mint', express.static(path.join(__dirname, '/public/mint.html')));

app.use('/faq', express.static(path.join(__dirname, '/public/faq.html')));

app.use('/', express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
