const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://lebretonquentin:uQmkMA6739Z16pqQ@cluster0.w358uu3.mongodb.net/hackatweet';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
