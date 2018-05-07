const express = require('express');
const router = express.Router();
const { authenticate } = require('../helpers/auth');
const { Story } = require('../models/Story');
const moment = require('../public/js/lib/moment');

// Stories Index
router.get('/', (req, res) => {
  Story.find({status: 'public'})
    .populate('user')
    .then(stories => {
      res.render('stories/index', {stories})
    });
});

// Show single story
router.get('/show/:id', (req, res) => {
  Story.findOne({_id: req.params.id})
    .populate('user')
    .then(story => {
      res.render('stories/show', {story});
    });
});

// Add Story Form
router.get('/add', authenticate, (req, res) => {
  res.render('stories/add');
});

// Process Add Story
router.post('/', (req, res) => {
  let allowComments;

  if (req.body.allowComments) {
    allowComments = true;
  } else {
    allowComments = false;
  }

  const body = {
    title: req.body.title,
    body: req.body.body,
    status: req.body.status,
    allowComments,
    user: req.user.id
  }

  new Story(body)
    .save()
    .then(story => {
      res.redirect(`/stories/show/${story.id}`);
    })
})

module.exports = router;