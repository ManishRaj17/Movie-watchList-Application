// frontend/src/components/MovieDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toggleWatched, deleteMovie, rateMovie, reviewMovie } from '../redux/actions/movies';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movies.movies.find(m => m._id === id));

    if (!movie) return <p>Movie not found</p>;

    const handleToggleWatched = () => {
        dispatch(toggleWatched(id));
    };

    const handleDelete = () => {
        dispatch(deleteMovie(id));
    };

    const handleRate = (rating) => {
        dispatch(rateMovie(id, rating));
    };

    const handleReview = (e) => {
        dispatch(reviewMovie(id, e.target.value));
    };

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Genre: {movie.genre}</p>
            <p>Status: {movie.watched ? 'Watched' : 'Unwatched'}</p>
            <button onClick={handleToggleWatched}>
                {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
            </button>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/edit-movie/${id}`}>Edit</Link>
            <div>
                <h2>Rate Movie</h2>
                {/* Star rating component */}
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={movie.rating}
                    onChange={(e) => handleRate(e.target.value)}
                />
            </div>
            <div>
                <h2>Review Movie</h2>
                <textarea
                    value={movie.review}
                    onChange={handleReview}
                ></textarea>
            </div>
        </div>
    );
};

export default MovieDetails;
