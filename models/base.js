const knex = require('../models/knex');

// 声明一个基本类
class Base{
  constructor(props){
    this.table = props;
  }

  // 查找
  all (){
    return knex(this.table).select();
  }

  // 新增
  insert (params){
    console.log('-------------------------------')
    console.log(params)
    return knex(this.table).insert(params);
  }

  // 更改
  update (id, params){
    return knex(this.table).where('id', '=', id).update(params);
  }

  // 删除
  delete (id){
    return knex(this.table).where('id', '=', id).del();
  }

}

module.exports = Base;