const { SMS_TYPE } = require('../../constant');

class ValidateSMS {
  static validateSMS(sms) {
    if (!sms || !sms.to_shop || !sms.contents || !sms.to_phone)
      return false;

    if (!sms.type || (sms.type !== SMS_TYPE.QC && sms.type !== SMS_TYPE.CSKH && sms.type !== SMS_TYPE.CONST_NUMBER && sms.type !== SMS_TYPE.BRANDNAME && sms.type !== SMS_TYPE.FIX_NUMBER))
      return false;
    else return true
  }

  static transToUnaccentedLetters(contents) {
    contents = contents.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    contents = contents.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    contents = contents.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    contents = contents.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    contents = contents.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    contents = contents.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    contents = contents.replace(/đ/g, "d");
    contents = contents.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    contents = contents.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    contents = contents.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    contents = contents.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    contents = contents.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    contents = contents.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    contents = contents.replace(/Đ/g, "D");

    // Gộp nhiều dấu space thành 1 space
    contents = contents.replace(/\s+/g, ' ');
    // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của xâu
    contents.trim();
    contents += ' ';

    return contents;
  }
}


module.exports = ValidateSMS;