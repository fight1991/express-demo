var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');

// 获取员工列表
router.post('/list', userController.queryUsers);
router.post('/education', userController.queryUsersEducationInfo);
router.post('/detail', userController.queryUsersDetail);



module.exports = router;
