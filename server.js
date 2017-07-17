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
  if(err) 
    {
     console.log('error in connecting to the database');
    }
});