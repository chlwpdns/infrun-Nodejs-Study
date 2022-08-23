const express = require('express');
const app = express();
const port = 3002;



mongodb+srv://<username>:<password>@cluster0.odgn4ue.mongodb.net/?retryWrites=true&w=majority


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
