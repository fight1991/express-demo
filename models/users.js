const Base = require('./base');

class Users extends Base {
  constructor() {
    super('staff');
  }
}
module.exports = new Users();
