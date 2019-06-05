const express = require('express');

const {
  _student
} = require('../controllers');

const router = express.Router();

router.post('/sign-up', _student._add);
router.get('/', _student._get);
router.get('/:_student_Id', _student._get_student);
router.delete('/', _student._remove_all);

module.exports = router;