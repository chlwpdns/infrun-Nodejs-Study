const express = require('express');
const app = express();

const port = 3002;

const mongoose = require('mongoose');
mongoose.connect(' ');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
