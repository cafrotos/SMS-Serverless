const ValidateSMS = require('../validation/validateSMS');
const {ERROR_NAME} = require('../../constant')
const ErrorHandle = require('../../src/libs/ErrorHandler');

module.exports = (req, res, next) => {
  let {sms} = req.body;
  let x_api_key = req.get('x-api-key');
  let isSMS, error;

  if(typeof sms === 'string') sms = JSON.parse(sms);
  if(!sms.type) sms.type = 1;

  isSMS = ValidateSMS.validateSMS(sms);
  
  if(!isSMS) {
    error = ErrorHandle.generateError("Invalid sms", 400, ERROR_NAME.INVALID);
    next(error);
  }
  
  //Tranfer sang chữ không dấu
  sms.contents = ValidateSMS.transToUnaccentedLetters(sms.contents);

  req.sms = sms;
  req.x_api_key = x_api_key;
  next();
}