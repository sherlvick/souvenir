const router = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const User = require('../models/User');

router.get('/', ensureGuest, (req, res) => {
  console.log(req.session);
  res.render('pages/auth');
});

router.get('/success', ensureAuth, (req, res) => {
  console.log(req.session);
  User.findById(req.session.passport.user)
    .then((user) => {
      console.log(user);
      res.render('pages/success', user);
    })
    .catch((error) => {
      // Error occurred
      console.error(error);
      res.status(error.status || 500);
      // if you using view enggine
      res.render('error', {
        message: error.message,
        error: {},
      });
    });
});

module.exports = router;
