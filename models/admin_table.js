const Base = require('./base');

class Admin extends Base {
  constructor() {
    super('admin_table');
  }
}
module.exports = new Admin();
