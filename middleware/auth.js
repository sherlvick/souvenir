module.exports = {
  ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/');
  },
  ensureGuest(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/success');
  },
};
