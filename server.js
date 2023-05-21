// server.js

/*  EXPRESS */

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

dotenv.config({ path: './config/secrets-config.env' });

/*  MIDDLEWARES  */
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
    store: new MongoStore({ uri: process.env.MONGO_URI }),
  })
);

/*  PASSPORT SETUP  */
const passport = require('passport');

require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

/*  ROUTES  */
app.use(require('./routes/index'));
app.use('/auth', require('./routes/auth'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`App listening on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
