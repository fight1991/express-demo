// 引入学生模板数据模型
const Students = require('../models/students');

const studentsController = {
  // 查询所有学生数据
  queryStudents: async function (req, res, next) {
    try {
      let data = await Students.all()
      return {
        code: '0000',
        message: "操作成功",
        data: data
      }
    } catch (e) {
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  },
  // 添加学生数据
  insertStudent: async function(req, res, next) {
    try {
      let { name, age, gender, teacherName } = req
      console.log(req)
      let data = await Students.insert(req)
      return {
        code: '0000',
        message: "操作成功",
        data: data
      }
    } catch (e) {
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  }
}

module.exports = studentsController;
