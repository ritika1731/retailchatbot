'use strict';

const dispatch = require('./dispatch');
var mysql = require('mysql');
var config= require('./config.json');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : config.dbhost,
  user            : config.dbuser,
  password        : config.dbpassword,
  database        : config.dbname
});

module.exports.intents = (event, context, callback) => {
  try {
    console.log(`event.bot.name=${event.bot.name}`);
    dispatch(event).then(response => {
      callback(null, response);
    });
  } catch (err) {
    callback(err);
  } 
  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
