const mongoose = require('mongoose');

/**
 * Defining a model of the collection we are going to be using
 * The mongoose.model function will create a collection using the first argument as its name.
 * This allows us to limit all our methods to said collection.
 * Second argument is the schema of the collection.
 * Simply put, a schema is a set of fields MANDATORY in each document (object) retrieved from the collection.
 * MongoDB, being a NoSQL db, supports having different sets of document with differing fields.
 * Hence why, it's important to have a standardized scheme of every document coming from the db.
 */
const Paradox = mongoose.model('paradox', {
  // _id is the name of the id field in Mongo, comes automatically with every entry from a collection.
  name: String,
  description: String
});

module.exports = Paradox;
