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

}

module.exports = usersController;
