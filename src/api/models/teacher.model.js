const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const Teacher_Schema = new Schema({

    _profile_image: {
        type: String,
        default: "user.png"
    },
    _full_name: {
        type: String,
        required: true
    },
    _first_name: {
        type: String,
        required: true
    },
    _last_name: {
        type: String,
        required: true
    },
    _email: {
        type: String,
        required: true,
        unique: true
    },
    _password: {
        type: String,
        required: true
    },
    _dob: {
        type: Date,
        default: Date.now
    },
    _address: {
        type: String,
        default: null
    },
    _phone_number: {
        type: Number,
        default: 0
    },
    _bio:{
        type: String,
        default: null
    },  
    _user_type: {
        type: String,
        default: 'teacher'
    },
    _creation_date: {
        type: Date,
        default: Date.now
    }
}, { strict: false });


const Teacher = mongoose.model('Teacher', Teacher_Schema);

module.exports = Teacher;
