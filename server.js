const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/pub'));

app.listen(process.env.PORT, 
  console.log(`Server running in ${process.env.PORT} mode on port ${process.env.PORT}`));