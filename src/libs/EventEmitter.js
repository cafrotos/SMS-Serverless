'use strict'

var EventEmitter = require('events');

class ModelEventEmitter extends EventEmitter {
    constructor() {
        super();
        this._instance;
    }

    static getEmitter(name) {
        if (!this._instances) this._instances = {};

        if (!this._instances[name]) {
            this._instances[name] = new ModelEventEmitter;
        }

        return this._instances[name];
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new ModelEventEmitter();
        }

        return this._instance;
    }
}

module.exports = ModelEventEmitter;