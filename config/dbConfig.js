const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('MongoDb is Connected');
});
connection.on('error', () => {
  console.log('MongoDb is failed');
});

module.exports = mongoose;
