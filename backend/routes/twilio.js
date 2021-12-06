const express = require('express');
const router = express.Router();

const { sendSms } = require('../controllers/twilioController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/sms/new').post(sendSms);

module.exports = router;
