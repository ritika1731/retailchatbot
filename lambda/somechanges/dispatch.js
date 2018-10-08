'use strict';

const order = require('./orderCost');
var mysql = require('mysql');
var config= require('./config.json');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : config.dbhost,
  user            : config.dbuser,
  password        : config.dbpassword,
  database        : config.dbname
});

module.exports = function(intentRequest,callback,event) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const intentName = intentRequest.currentIntent.name;
  
    if (intentName === 'OrderCost') {
      var sql = "SELECT expected_delivery_date from test where order_number= " + event.order_number;
      console.log(intentName + ' was called');
      pool.getConnection(function(err, connection) {
     // Use the connection
     connection.query(sql, function (error, results, fields) {
       // When done with the connection, release it.
       connection.release();
       // Handle error after the release.
       if (error) callback(error);
       else callback(null, results[0]);
        });
      });
    return order(intentName ,callback);
  };

    if (intentName === 'OrderDeliveryAddress') {
      console.log(intentName + ' was called');
      return order(intentName ,callback);
    }
     if (intentName === 'OrderRecieve') {
      console.log(intentName + ' was called');
      return order(intentName ,callback);
    }
    
    if (intentName === 'OrderTrack') {
      console.log(intentName + ' was called');
      return order(intentName ,callback);
    }
     if (intentName === 'OrderWhere') {
      console.log(intentName + ' was called');
      return order(intentName ,callback);
    }
     if(intentName === 'What_in_Order') {
      console.log(intentName + ' was called');
      return order(intentName ,callback);
    }
 
    throw new Error(`Intent with name ${intentName} not supported`);

}