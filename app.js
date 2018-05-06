const express = require('express');
const { mongoose } = require('./db/mongoose');
const passport = require('passport');

// Passport config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('It works!');
});

app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});