var express = require('express');
var router = express.Router();
const studentsController = require('../controllers/students');

// 获取用户信息
router.post('/student/add', studentsController.insertStudent);


module.exports = router;