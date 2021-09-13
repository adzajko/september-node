const mongoose = require('mongoose');

/**
 * Wrapper function for connecting to the database.
 * Ensure that the MONGO_URI field is present in your .env file
 */
const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = {
  connectToDatabase
};
