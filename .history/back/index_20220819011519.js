const express = require('express');
const app = express();

const port = 3002;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://chlwpdns2:dns1563@cluster0.odgn4ue.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('mongoDb connected'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
