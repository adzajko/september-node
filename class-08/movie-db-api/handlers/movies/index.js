const Movie = require('../../pkg/Movie');

const getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addMovie = async (req, res, next) => {
    const { movieTitle, moviePoster, releaseDate } = req.body;
    if (!movieTitle || !moviePoster || !releaseDate) {
        return res.status(400).json('Cannot create movie!');
    }

    try {
       await Movie.create({movieTitle, moviePoster, releaseDate});
       return res.status(201).json('Movie added!');
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMovie = async (req, res, next) => {
    const id = req.params.id;

    try {
        await Movie.findByIdAndDelete(id);
        return res.status(200).json('Movie deleted!');
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getAllMovies,
    addMovie,
    deleteMovie
}