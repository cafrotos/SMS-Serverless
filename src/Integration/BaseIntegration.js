'use strict'


class BaseIntegration {

    constructor() {
        this.instances;
        this.token;
        this.isActive;
    }

    async getIntegration() {
        this.token = integration.token;
        this.isActive = integration.isActive;
    }
}

module.exports = BaseIntegration;