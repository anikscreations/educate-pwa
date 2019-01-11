const mongoose = require('mongoose');

const { Schema } = mongoose;

const MainSchema = new Schema({
  created_date :{
    type:Date,
    default: Date.now(),
    required: true
  }
});

const Main = mongoose.model('Main', MainSchema);

module.exports = Main;
