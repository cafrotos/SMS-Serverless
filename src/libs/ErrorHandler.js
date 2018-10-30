"use strict";

class ErrorHandler {
    static createError(message, httpCode, name, failures) {
        let err = new Error(message);
        err.httpCode = httpCode;
        err.failures = failures;
        err.name = name;
        err.message = message;
        return err;
    }

    static generateError(message, httpCode, name) {
        let err = {};
        err.httpCode = httpCode;
        err.name = name;
        err.message = message;
        return err;
    }
}

module.exports = ErrorHandler;