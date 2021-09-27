var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET users listing. */
// 获取用户信息
router.get('/userInfo', userController.showUser);

module.exports = router;
