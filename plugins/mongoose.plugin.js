const Mongoose = require('mongoose');

const MongoosePlugin = {
  name: 'MongoosePlugin',
  pkg: require('../package.json'),
  register: function (server, options) {
    //connect the mongoose to my database
    Mongoose.connect('mongodb://localhost:27017/sashank-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    //error while connected to mongodb
    Mongoose.connection
      .once('open', () => {
        console.log('Database connected');
      })
      .catch((err) => {
        console.log('Databse error');
      });
  },
};

module.exports = MongoosePlugin;
