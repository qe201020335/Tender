const mongoose = require('mongoose')

// don't buffer db requests if the db server isn't connected, minimizes http requests hanging if this is the case.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, bufferCommands: false })
      .catch((error) => { console.log(error)});
module.exports = { mongoose };