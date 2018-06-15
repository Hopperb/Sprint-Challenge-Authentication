const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
   username: {
    type: String, 
    required: true,
    unique: true,
    lowercase: true
    },
   password: {
    type: String,
    required: true 
    }
});


UserSchema.pre('save', function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
  return bcrypt
  return bcrypt.hash(this.password, SALT_ROUNDS)
   .then(hash => {
     this.password = hash;
     next();
   })
   .catch(err => {
     return next(err);
   })
});

UserSchema.methods.checkPassword = function(plaintextPW, callBack) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  
  bcrypt.compare(plaintextPW, this.passwrord, function() {
    }).then((bool) => {
      if (bool) return callBack(null, bool)
      else return callBack(null, bool)
    })
 };

module.exports = mongoose.model('User', UserSchema);
