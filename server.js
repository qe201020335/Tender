const express = require('express');
const session = require("express-session");
const dotenv = require('dotenv');
const cors = require('cors');
const signUpRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const checkSessionRoute = require('./routes/check-session');
// const MongoStore = require('connect-mongo');
const path = require('path')

const app = express();

if (process.env.NODE_ENV !== 'PROD') {
  dotenv.config({path: './config/config.env'});
}

const { mongoose } = require('./config/mongoose')

const TEST_USER_ID = '5fb8b011b864666580b4efe3' // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file

const TEST_USER_EMAIL = 'test@user.com'

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

app.use(express.static(path.join(__dirname, '/client/build/')));

app.use('/api', loginRoute);
app.use('/api', logoutRoute);
app.use('/api', checkSessionRoute);
app.use('/api', signUpRoute);

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


// configure CORS
const corsOptions ={
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}
app.use(cors());

app.listen(process.env.PORT, ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));