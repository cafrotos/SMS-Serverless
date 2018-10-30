const express = require('express');
const router = express.Router();
const SendSMSRouter = require('./sendSms');
const WebhookRouter = require('./webhook');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/sms', SendSMSRouter.getInstance().getRouter());
router.use('/webhook', WebhookRouter.getInstance().getRouter());

module.exports = router;
