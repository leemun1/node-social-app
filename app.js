const express = require('express');
const { mongoose } = require('./db/mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// Load Routes
const auth = require('./routes/auth');

const port = process.env.PORT || 3000;

// Passport config
require('./config/passport')(passport);

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set Global Variables
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.get('/', (req, res) => {
  res.send('It works!');
});

// Use Routes
app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});