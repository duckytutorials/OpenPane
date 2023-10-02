const mongoose = require('mongoose');

const user_data_schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  premium: Boolean,
  Org: Array
});

const usermodel = mongoose.model('user_data', user_data_schema);

module.exports = usermodel