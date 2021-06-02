const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config()
var path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const AuthRoutes = require('../router/AuthRoutes');
const RoleRoutes = require('../router/RoleRoutes');
const SubjectRoutes = require('../router/SubjectRoutes');
const EmployeeRoutes = require('../router/EmployeeRoutes');
const studenteeRoutes = require('../router/studentRoutes');
var app = express();


// connecting DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DataBase Connected Successfully ^_^ !!!'));
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function () {
  console.log("connect to DB success !*_*");
});

//Middleware

// to run react from server after build react app
app.use(express.static(path.join(__dirname,"../../online-school-system/public")));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../../online-school-system/public', 'index.html'));
});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../../blog/build', 'index.html'));
// });
// cors
app.use(cors());         // to connect frontend with backend
app.use(express.json());      // to recive data as objects or arrays from front
// app.use(express.static('public'));
app.use(methodOverride('_method'));

//body-parser
// app.use(express.urlencoded()); 

app.use(AuthRoutes);

app.use('/role', RoleRoutes);

app.use('/subject', SubjectRoutes);

app.use('/employee', EmployeeRoutes);

app.use('/students', studenteeRoutes);

app.post('/hi',function(req,res){
  console.log(req.body,'req.body')
  res.status(404)
})


let port = process.env.PORT || 8000;
app.listen(port, () => console.log(`work on ${port}`));