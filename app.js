const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth-users') .then(() => {
  console.log('\n***Connected to db ***\n');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
