const express = require('express');
const { mongoose } = require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});