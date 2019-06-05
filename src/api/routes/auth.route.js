const express = require('express');

const {
  _auth
} = require('../controllers');

const router = express.Router();

router.post('/student/login', _auth._login_student);
router.post('/teacher/login', _auth._login_teacher);

module.exports = router;