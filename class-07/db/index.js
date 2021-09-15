const mongoose = require('mongoose');

/**
 * Wrapper function used to connect to MongoDB.
 */
const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI);
} // ES6 Arrow Function 0.00000001ms

module.exports = {
    connectToDb
}