module.exports = {
  authenticate:  (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
      console.log('authenticated');
    }
    console.log('not auth')
    res.redirect('/');
  }
}