const Users = require('../models/users.js');

const usersController = {

  queryUsers: async function (req, res, next) {
    try {
      let data = await Users.all()
      res.json({
        code: '0000',
        message: "操作成功",
        data: data
      })
    } catch (e) {
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  },
  queryUsersBasicInfo: async function (req, res, next) {
    try {
      let sNo = req.body.account;
      let data = await Users.getUserBasicInfo(sNo);
      console.log(data)
      if (data && data[0]) {
        res.json({
          code: '0000',
          message: "操作成功",
          data: data[0]
        })
      } else {
        res.json({
          code: '0001',
          message: "查询失败",
          data: null
        })
      }
      
    } catch (e) {
      console.log(e)
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  },
  queryUsersEducationInfo: async function (req, res, next) {
    try {
      let sNo = req.body.account
      console.log(sNo)
      let data = await Users.getUserEducationInfo(sNo)
      res.json({
        code: '0000',
        message: "操作成功",
        data: data
      })
    } catch (e) {
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  },
  // 部门+职称
  queryUsersDetail: async function (req, res, next) {
    try {
      let sNo = req.body.account
      if (!sNo) {
        res.json({
          code: '0001',
          message: "参数错误",
          data: null
        })
      }
      let data = await Users.getUserDetail(sNo)
      res.json({
        code: '0000',
        message: "操作成功",
        data: data
      })
    } catch (e) {
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  },
}

module.exports = usersController;
