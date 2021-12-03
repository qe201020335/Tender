const express = require('express');
const session = require("express-session");
const dotenv = require('dotenv');
const cors = require('cors');
const signUpRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const checkSessionRoute = require('./routes/check-session');
// const MongoStore = require('connect-mongo');

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
       expires: 60000,
       httpOnly: true
      },
   // don't save the initial session if the session object is unmodified (for example, we didn't log in).
   saveUninitialized: false,
   // don't resave an session that hasn't been modified.
   resave: false,
}));

app.use(express.static(__dirname + '/client/build/'));

app.use('/', loginRoute);
app.use('/', logoutRoute);
app.use('/', checkSessionRoute);
app.use('/', signUpRoute);

// configure CORS
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.listen(process.env.PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));