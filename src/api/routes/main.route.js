const express = require('express');

const {
  main
} = require('../controllers');

const router = express.Router();

router.get('/', main.get);

module.exports = router;