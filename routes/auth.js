const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  (req, res) => {
    // Successful authentication, redirect success.
    res.redirect('/success');
  }
);

router.get('/logout', (req, res) => {
  // req.session.destroy(function(e){
  req.logout(() =>
    req.session.destroy((err) => {
      if (err) {
        console.error('Failed to clear session:', err);
      } else {
        console.log('Session cleared successfully');
      }
      res.redirect('/');
    })
  );
  // });
});

router.get('/error', (req, res) => res.send('error logging in'));

module.exports = router;
