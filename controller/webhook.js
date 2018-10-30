const Router = require('express').Router;
// const verifyWebhook = require('./middleware/verifyWebhook');

class WebhookRouter {
  constructor() {
    this.router = Router();
    this.instance;
  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new WebhookRouter();
    }
    return this.instance;
  }

  getRouter() {
    this.router.post('/webhook', this.getRouter);
    return this.router;
  }

  getStatusSMS(req, res, next) {
    
  }
}

module.exports = WebhookRouter;