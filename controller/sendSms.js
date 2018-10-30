const Router = require('express').Router;
const verifySMS = require('./middleware/verifySMS');
const EventEmitter = require('../src/libs/EventEmitter').getInstance();
const { EVENT_NAME, ERROR_NAME } = require('../constant');
const ErrorHandle = require('../src/libs/ErrorHandler');


class SendSMSRouter {
  constructor() {
    this.router = Router();
    this.instance;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new SendSMSRouter();
    }
    return this.instance;
  }

  getRouter() {
    this.router
      .get('/sms/:smsID', this.getSMSInfo)
      .post('/', verifySMS, this.sendSMS)

    return this.router;
  }

  sendSMS(req, res, next) {
    let { sms, x_api_key } = req;
    let response;
    EventEmitter.emit(EVENT_NAME.SEND_SMS, sms);

    response = ErrorHandle.generateError({sms}, 200, ERROR_NAME.SUCCESS);
    res.json(response);
  }

  getSMSInfo(req, res, next) {

  }
}

module.exports = SendSMSRouter