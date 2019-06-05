const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { Student } = require('../models');
const { sendErr } = require('../../utils');

const _get = async (req, res, next) => {
    try {
        const students = await Student.find()
            .sort('_creation_date')
            .lean();

        return res.status(200).json({
            message: 'All Students found!',
            students: students

        });
    } catch (err) {
        return sendErr(res, err);
    }
};

const _get_student = async (req, res, next) => {
    try {
        const _student_Id = req.params._student_Id;

        const student = await Student.findById({
            _id: _student_Id
        });

        return res.status(200).json({
            message: 'Student found!',
            student: student

        });
    } catch (err) {
        return sendErr(res, err);
    }
};

const _remove_all = async(req, res, next) => {
    try{

        const students = await Student.deleteMany()
        .exec();

        return res.status(200).json({
            message: 'All Students Deleted!',
            students: students

        });

    } catch (err) {
        return sendErr(res, err);
    }
};

const _add = async (req, res, next) => {
    try {
        Student.find({ email: req.body._email }).exec()
            .then((user) => {
                if (user.length >= 1) {
                    return sendErr(res, user, 'Student Already exist', 401);
                }
                else {
                    bcrypt.hash(req.body._password, 10, (err, hash) => {
                        if (err) {
                            return sendErr(res, err, 'An error ocurred trying to create the password, please choose another password!', 401);
                        }
                        else {
                            const _student_data = new Student({
                                _email: req.body._email,
                                _full_name: req.body._full_name,
                                _first_name: req.body._first_name,
                                _last_name: req.body._last_name,
                                _password: hash
                            });

                            _student_data.save()
                                .then((student) => {
                                    const token = jwt.sign({
                                        _email: student._email,
                                        _id: student._id
                                    }, process.env.JWT_KEY,
                                        {
                                            expiresIn: "30 days"
                                        });
                                    return res.status(200).json({
                                        message: 'Student Created!',
                                        student: student,
                                        token: token
                                    });
                                })
                                .catch((err) => {
                                    return sendErr(res, err);
                                })
                        }
                    })
                }
            })

    }
    catch (err) {
        return sendErr(res, err);
    }
};


module.exports = {
    _get,
    _get_student,
    _add,
    _remove_all
};