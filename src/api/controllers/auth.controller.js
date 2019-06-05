const { Student } = require('../models');
const { sendErr } = require('../../utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const _login_student = async (req, res, next) => {

    try {
        const student = await Student.findOne({ _email: req.body._email }).exec();
        if (!student) {
            return sendErr(res, '', 'Error! student not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body._password, student._password, (err, result) => {
            if (err) {
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if (result) {
                const token = jwt.sign({
                    _email: student._email,
                    _id: student._id
                }, process.env.JWT_KEY,
                    {
                        expiresIn: "30 days"
                    });
                return res.status(200).json({
                    message: `student found!`,
                    token: token,
                    student: student
                })
            }
            return sendErr(res, '', 'Authentication error, please try again!', 404);
        });
    }

    catch (err) {
        return sendErr(res, err);
    }
};

/*  =============
 *  -- EXPORTS --
 *  =============
 */

module.exports = {
    _login_student
};