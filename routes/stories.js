const express = require('express');
const router = express.Router();
const { authenticate } = require('../helpers/auth');

// Stories Index
router.get('/', (req, res) => {
  res.render('stories/index');
});

// Add Story Form
router.get('/add', authenticate, (req, res) => {
  res.render('stories/add');
});

module.exports = router;