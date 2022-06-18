var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');

// 获取员工列表
router.post('/staff', userController.queryUsers);

module.exports = router;
