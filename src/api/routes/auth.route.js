const express = require('express');

const {
  _auth
} = require('../controllers');

const router = express.Router();

router.post('/student/login', _auth._login_student);

module.exports = router;