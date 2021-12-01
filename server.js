const express = require('express');
const session = require("express-session");
const dotenv = require('dotenv');
const cors = require('cors')
// const MongoStore = require('connect-mongo');


const app = express();

const login = require('./routes/login')

const TEST_USER_ID = '5fb8b011b864666580b4efe3' // the id of our test user (you will have to replace it with a test user that you made). can also put this into a separate configutation file

const TEST_USER_EMAIL = 'test@user.com'

app.use(express.json());

app.use(express.static(__dirname + '/client/build/'));

if (process.env.NODE_ENV !== 'PROD') {
   dotenv.config({path: './config/config.env'});
   // enable CORS if in development
   app.use(cors())
}
//app.use('/login', login);
app.listen(process.env.PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));