// 引用用户模版数据
const Admin = require('../models/admin_table.js');

const adminController = {
  login: async function(req,res,next){
    try{
      console.log(req);
      let reqData = req.body;
      let userData = await Admin.all();
      if (userData.sNo == reqData.account && userData.pwd == reqData.password) {
        res.json({
          code: '0000',
          message: "操作成功",
          data: userData
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