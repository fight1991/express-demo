const Base = require('./base');
const knex = require('../models/knex');
class Users extends Base {
  constructor() {
    super('staff');
  }
  // 基础信息
  getUserBasicInfo (account) {
    return knex(this.table)
    .where('s_no', '=', account)
    .select()
  }
  getUserEducationInfo (account) {
    return knex(this.table)
    .leftJoin('education', 'staff.s_no', '=', 'education.s_no')
    .where('staff.s_no', '=', account)
    .select()
  }
  // 获取所有信息详情
  getUserDetail (account) {
    return knex(this.table)
    .leftJoin('education', 'staff.s_no', '=', 'education.s_no')
    .innerJoin('sp', 'staff.s_no', '=', 'sp.s_no')
    .innerJoin('professional', 'sp.p_no', '=', 'professional.p_no')
    .innerJoin('department', 'sp.d_no', '=', 'department.d_no')
    .where('staff.s_no', '=', account).select()
  }
}
module.exports = new Users();
