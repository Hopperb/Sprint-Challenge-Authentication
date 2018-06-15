const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  User
    .create({username, password})
    .then(user => 
      res.status(201).json({data: user}))
    .catch(err => res.status(500).json({messageError: err}))
};

module.exports = {
  createUser
};
