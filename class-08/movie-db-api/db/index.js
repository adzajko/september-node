const { connect } = require('mongoose');

/**
 * Wrapper function for establishing DB connection
 */
const connectToDb = async () => {
  // Establish a connection to the DB using the mongoose.connect function
  await connect(process.env.MONGO_URI);
};

module.exports = { connectToDb };
