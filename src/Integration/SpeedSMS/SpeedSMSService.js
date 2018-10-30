'use strict'

const ResponeClient = require('./SpeedSMSClient');
const BaseIntegration = require('../BaseIntegration');
const path = require('./path');
const TypeofSMS = require('../../lib/SMSManager/TypeofSMS')

class SpeedSMSService extends BaseIntegration {
  constructor() {
    super()
    this.instance;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new SpeedSMSService();
    }

    return this.instance;
  }

  async sendSMS(smsInfo, brandName = '') {
    if (smsInfo.type === TypeofSMS.BRANDNAME && !brandName) {
      brandName = smsInfo.sender;
    }

    let url = path.SEND_SMS;
    let method = 'POST';

    let data = {
      to: [smsInfo.phone],
      content: smsInfo.contents,
      sms_type: smsInfo.type,
      brandname: brandName
    }

    let respone;

    try {
      respone = await ResponeClient.getInstance().requestToAPI(url, method, data, SpeedSMSService.token);
    } catch (err) {
      console.log(err);
      return null;
    };

    return respone;
  }

}

module.exports = SpeedSMSService;