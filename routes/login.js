var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin');

// 登录
router.post('/login', adminController.login);

module.exports = router;