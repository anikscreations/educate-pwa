const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { Teacher } = require('../models');
const { sendErr } = require('../../utils');

const _get = async (req, res, next) => {
    try {
        const teacher = await Teacher.find()
            .sort('_creation_date')
            .lean();

        return res.status(200).json({
            message: 'All Teachers found!',
            teachers: teachers

        });
    } catch (err) {
        return sendErr(res, err);
    }
};

const _get_teacher = async (req, res, next) => {
    try {
        const _teacher_Id = req.params._teacher_Id;

        const teacher = await Teacher.findById({
            _id: _teacher_Id
        });

        return res.status(200).json({
            message: 'Teacher found!',
            teacher: teacher

        });
    } catch (err) {
        return sendErr(res, err);
    }
};

const _remove_all = async(req, res, next) => {
    try{

        const teachers = await Teacher.deleteMany()
        .exec();

        return res.status(200).json({
            message: 'All Teahchers Deleted!',
            teachers: teachers

        });

    } catch (err) {
        return sendErr(res, err);
    }
};

const _add = async (req, res, next) => {
    try {
        Teacher.find({ email: req.body._email }).exec()
            .then((user) => {
                if (user.length >= 1) {
                    return sendErr(res, user, 'Teacher Already exist', 401);
                }
                else {
                    bcrypt.hash(req.body._password, 10, (err, hash) => {
                        if (err) {
                            return sendErr(res, err, 'An error ocurred trying to create the password, please choose another password!', 401);
                        }
                        else {
                            const _teacher_data = new Teacher({
                                _email: req.body._email,
                                _full_name: req.body._full_name,
                                _first_name: req.body._first_name,
                                _last_name: req.body._last_name,
                                _password: hash
                            });

                            _teacher_data.save()
                                .then((teacher) => {
                                    const token = jwt.sign({
                                        _email: teacher._email,
                                        _id: teacher._id
                                    }, process.env.JWT_KEY,
                                        {
                                            expiresIn: "30 days"
                                        });
                                    return res.status(200).json({
                                        message: 'Teacher Created!',
                                        teacher: teacher,
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
    _get_teacher,
    _add,
    _remove_all
};