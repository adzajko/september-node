const mongoose = require('mongoose');

const Movie = mongoose.model('movies', {
  movieTitle: String,
  moviePoster: String,
  releaseDate: Date
});

module.exports = Movie;
