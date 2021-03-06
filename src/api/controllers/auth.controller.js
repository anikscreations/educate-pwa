const { Student } = require('../models');
const { Teacher } = require('../models');
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

const _login_teacher = async (req, res, next) => {

    try {
        const teacher = await Teacher.findOne({ _email: req.body._email }).exec();
        if (!teacher) {
            return sendErr(res, '', 'Error! teacher not found, invalid id or unauthorized request', 404);
        }
        const check_pass = await bcrypt.compare(req.body._password, teacher._password, (err, result) => {
            if (err) {
                return sendErr(res, '', 'Error! Incorrect password, please try again', 404);
            }
            if (result) {
                const token = jwt.sign({
                    _email: teacher._email,
                    _id: teacher._id
                }, process.env.JWT_KEY,
                    {
                        expiresIn: "30 days"
                    });
                return res.status(200).json({
                    message: `Teacher found!`,
                    token: token,
                    teacher: teacher
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
    _login_student,
    _login_teacher
};