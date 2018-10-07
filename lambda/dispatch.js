'use strict';

const order = require('./orderCost');

module.exports = function(intentRequest,callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    const intentName = intentRequest.currentIntent.name;
  
    if (intentName === 'OrderCost') {
      console.log(intentName + ' was called');
      return order(intentName ,callback);
    }
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