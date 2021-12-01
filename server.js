const express = require('express');

const session = require("express-session");
// const MongoStore = require('connect-mongo');
if (process.env.NODE_ENV !== 'production') {
   const dotenv = require('dotenv');
   dotenv.config({path: './config/config.env'});
 }

const app = express();

const login = require('./routes/login')

const TEST_USER_ID = '5fb8b011b864666580b4efe3' // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file

const TEST_USER_EMAIL = 'test@user.com'

app.use(express.json());

app.use(express.static(__dirname + '/client/build/'));

// enable CORS if in development
const cors = require('cors')
if (env !== 'PROD') {
   app.use(cors())
}

app.use('/login', login);
app.listen(process.env.PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));