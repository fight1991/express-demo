// 引用用户模版数据
const Admin = require('../models/admin_table.js');

const adminController = {
  login: async function(req,res,next){
    try{
      console.log(req.body);
      let { account, password } = req.body;
      console.log(account)
      if (!account || !password) {
        res.json({
          code: '0001',
          message: "请输入用户名或密码",
          data: null
        })
      }
      let userData = await Admin.getUserInfo(account, password);
      console.log('------------------')
      console.log(userData)
      if (userData && userData[0]) {
        res.json({
          code: '0000',
          message: "操作成功",
          data: userData[0]
        })
      } else {
        res.json({
          code: '0001',
          message: "用户名或密码不正确",
          data: null
        })
      }
      
    }catch(e){
      res.json({ code: '0001', message: "操作失败", data: e })
    }
  },
}

module.exports = adminController;