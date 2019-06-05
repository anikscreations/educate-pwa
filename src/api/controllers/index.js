const main = require('./main.controller');
const _auth = require('./auth.controller');
const _student = require('./student.controller');
const _teacher = require('./teacher.controller');
module.exports = {
    main,
    _auth,
    _student,
    _teacher
  };