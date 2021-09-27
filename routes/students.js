var express = require('express');
var router = express.Router();
const studentsController = require('../controllers/students');

// 获取用户信息
router.get('/getInfo', studentsController.queryStudents);
router.post('/add', studentsController.insertStudent);

module.exports = router;