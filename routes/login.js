var express = require('express');
var router = express.Router();
const adminController = require('../controllers/admin');

// 登录
try {
  router.post('/login', adminController.login);
} catch (error) {
  console.log(error)
}

module.exports = router;