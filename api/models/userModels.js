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
    passwrord: {
      type: String,
      required: true,
      minlength: 4,
      validate: checkPasswordStrength,
      msg: 'password too weak, do better.'
    },
    createdAt: {
      date: Date,
      createdAt: Date.now()
    }
});

function checkPasswordStrength(){
  return passwrord.length > 12;
}

UserSchema.pre('save', function(next) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // if there is an error here you'll need to handle it by calling next(err);
  // Once the password is encrypted, call next() so that your userController and create a user
  return bcrypt
    .hash(this.passwrord, SALT_ROUNDS)
    .then(hash => {
      this.passwrord = hash;
      return next();
    })
    .catch(err => {
      return next(err)
    })

});

UserSchema.methods.checkPassword = function(passwordClear) {
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // Fill this method in with the Proper password comparing, bcrypt.compare()
  // Your controller will be responsible for sending the information here for password comparison
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
 return bcrypt.compare(passwordClear, this.passwrord)
 };

module.exports = mongoose.model('User', UserSchema);
