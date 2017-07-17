const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

//connect to the database
mongoose.connect(config.database,function(err)
{
  if(err){
     console.log(err);
    }
  else{
      console.log('connected to the database');
  }
});

//setting up a server
app.listen(config.port, function (err) {

  if (err) {
    console.log('error in connection');
  }
  else {
    console.log('listening at port 3000');
  }
});