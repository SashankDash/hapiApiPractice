const Mongoose = require('mongoose');

// const MongoosePlugin =  function () {
    Mongoose.connect('mongodb://localhost:27017/sashank-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    Mongoose.connection
      .once('open', () => {
        console.log('Database connected');
      })
      .catch((err) => {
        console.log('Databse error');
      });
  //}


// module.exports = MongoosePlugin;
