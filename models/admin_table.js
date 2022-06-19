const Base = require('./base');
const knex = require('../models/knex');

class Admin extends Base {
  constructor() {
    super('admin_table');
  }
  getUserInfo(account, password) {
    return knex(this.table)
    .where({
      's_no': account,
      'pwd': password
    }).select()
  }
}
module.exports = new Admin();
