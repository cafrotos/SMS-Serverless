const SMS_TYPE = {
  QC: 1, // loai tin nhan quang cao
  CSKH: 2, // loai tin nhan cham soc khach hang
  BRANDNAME: 3, // loai tin nhan brand name cskh
  FIX_NUMBER: 4, // loai tin nhan brand name co dinh
  CONST_NUMBER: 6 // loai tin nhan dau so co dinh
}

const ERROR_NAME = {
  INVALID: "INVALID",
  SUCCESS: "SUCCESS"
}

const EVENT_NAME = {
  SEND_SMS: "SEND_SMS",
  UPDATE_SMS_STATUS: "UPDATE_SMS_STATUS"
}

module.exports = {
  SMS_TYPE,
  ERROR_NAME,
  EVENT_NAME
}