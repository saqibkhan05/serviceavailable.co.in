var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactus = new Schema({
  name: {
      type:String,
      required:true
    },
  email: {
    type:String,
    required:true
    },
  msg: {
    type:String,
    required:true
    },
    Created_Date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('contact', contactus);
