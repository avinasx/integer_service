const mongoose = require('mongoose');
const multer = require('multer');

const v1Schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  integer: {type: Number, required : true,  default: 0},

});

module.exports = mongoose.model('V1', v1Schema);
