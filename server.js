const express = require('express');
const session = require("express-session");
const dotenv = require('dotenv');
const cors = require('cors');
const signUpRoute = require('./routes/auth/signup');
const loginRoute = require('./routes/auth/login');
const logoutRoute = require('./routes/auth/logout');
const checkSessionRoute = require('./routes/auth/check-session');
const restaurantRoute = require('./routes/api/restaurant');
const userRoute = require('./routes/api/user');

// const MongoStore = require('connect-mongo');
const path = require('path')

const app = express();

if (process.env.NODE_ENV !== 'PROD') {
  dotenv.config({path: './config/config.env'});
  app.use(cors());
}

const { mongoose } = require("./config/mongoose");

app.use(express.json());

app.use(session({
  secret: 'our hardcoded secret',
  cookie: {
    expires: 600000,
    httpOnly: true
  },
  // don't save the initial session if the session object is unmodified (for example, we didn't log in).
  saveUninitialized: false,
  // don't resave an session that hasn't been modified.
  resave: false,
}));

app.use('/auth', loginRoute);
app.use('/auth', logoutRoute);
app.use('/auth', checkSessionRoute);
app.use('/auth', signUpRoute);
app.use('/api', restaurantRoute);
app.use('/api', userRoute);

app.use(express.static(path.join(__dirname, '/client/build/')));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  // check for page routes that we expect in the frontend to provide correct status code.
  const goodPageRoutes = [
    "/",
    "/my-restaurant",
    "/my-favourites",
    "/login",
    "/register",
    "/admin",
  ];
  if (!goodPageRoutes.includes(req.url)) {
    // if url not in expected page routes, set status to 404.
    res.status(404);
  }

  // send index.html
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(process.env.PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));