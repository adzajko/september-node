

const MovieItem = ({ movieInfo }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="movie-title">{movieInfo.movieTitle}</h3>
            </div>
            <div className="card-body">
                <div className="img-container">
                    <img alt={movieInfo.movieTitle} src={movieInfo.moviePoster} className="poster" />
                </div>
                <p className="release-text">Release date: {new Date(movieInfo.releaseDate).getFullYear()}</p>
            </div>
        </div>
    );
}

export default MovieItem;