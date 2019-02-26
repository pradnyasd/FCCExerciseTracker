const mongoose = require('mongoose');
const User = new mongoose.Schema({
  username: String,
  count: Number,
  log : [{ description: String, duration: Number, date: Date }],
});

module.exports = mongoose.model('User', User);


// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// //var passportLocalMongoose = require('passport-local-mongoose');

// var UserSchema = new Schema({
//     username: String,
//     password: String,
//     name: String
// });

// //UserSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', UserSchema);
