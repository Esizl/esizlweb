const mongoose = require('mongoose');
const makeid = require('../public/utils/makeid.js')

const reqString = {
  type: String,
  required: true
}

const UserSchema = new mongoose.Schema({
  accountId: {
    type: String,
    required: true,
    default: makeid(12, '123456789')
  },
  admin: {
    type: Boolean,
    default: false
  },
  name: reqString,
  email: reqString,
  password: reqString,
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;