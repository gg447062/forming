const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/public')));

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
    } else {
      next();
    }
  });
}

app.use('/api', require('./api'));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

app.use((err, req, res) => {
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
