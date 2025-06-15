const mongoose = require('mongoose');
module.exports = function connectDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
};


