const { connect } = require('mongoose');

const connectToDb = async () => {
  await connect(process.env.MONGO_URI);
};

module.exports = {
  connectToDb
};
