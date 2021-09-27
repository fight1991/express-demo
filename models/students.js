const Base = require('./base');

class Students extends Base {
  constructor() {
    super('students');
  }
}
module.exports = new Students();
