const express = require('express');
const router = express.Router();
const {authenticate} = require('../helpers/auth');

router.get('/', (req, res) => {
  res.render('index/welcome');
});

router.get('/dashboard', authenticate, (req, res) => {
  res.render('index/dashboard');
});

router.get('/about', (req, res) => {
  res.render('index/about');
});

router.get('/contact', (req, res) => {
  res.render('index/contact');
});

module.exports = router;