'use strict';

const express = require('express');
const app = express();
const {PORT = 3000} = process.env;

app.get('/', (req, res) => {
  res.json({});
  // res.redirect('http');
});

app.use(function(err, req, res, next) { // always last
  if (!err) {
    return next();
  }

  console.log(err.stack);
  res.status(err.status || 500).json({ status: 'error' });
});

app.listen(PORT, () => console.log(`localhost:${PORT}`));
