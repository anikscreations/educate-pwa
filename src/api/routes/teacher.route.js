const express = require('express');

const {
  _teacher
} = require('../controllers');

const router = express.Router();

router.post('/sign-up', _teacher._add);
router.get('/', _teacher._get);
router.get('/:_teacher_Id', _teacher._get_teacher);
router.delete('/', _teacher._remove_all);

module.exports = router;