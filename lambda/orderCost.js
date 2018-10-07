'use strict';

const lexResponses = require('./lexResponses');

module.exports = function(intentRequest,callback) {
  console.log(intentRequest.currentIntent.slots + 'is the slot');
const slots=intentRequest.currentIntent.slots;
  var orderNumber = intentRequest.currentIntent.slots.orderNum;
  console.log(orderNumber + 'is the order Number');
    const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') {
callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
return;
}
};