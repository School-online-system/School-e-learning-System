const express = require("express");
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express();

// connecting DB
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('DataBase Connected Successfully ^_^ !!!'));
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
 console.log("connect to DB success !*_*");
});

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
res.send('the server is running well')
  });
  
let port = process.env.PORT || 8000;
app.listen(port, () => console.log(`work on ${port}`));