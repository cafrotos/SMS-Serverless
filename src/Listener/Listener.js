'use strict'

const EventEmitter = require('../libs/EventEmitter').getInstance();
const {EVENT_NAME} = require('../../constant');

//gửi sms
EventEmitter.on(EVENT_NAME.SEND_SMS, (sms) => {

})

//cập nhật trạng thái tin nhắn trên speedsms lên database
EventEmitter.on(EVENT_NAME.UPDATE_SMS_STATUS, (smsInfo) => {

})
