const { model } = require('mongoose');

const Starship = model('starships', {
  // How to declare a field of a document to be an index field.
  starshipName: { type: String, index: true, unique: true },
  starshipAge: Number,
  starshipColor: String
});

module.exports = Starship;
