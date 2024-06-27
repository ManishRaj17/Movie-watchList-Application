// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const movies = useSelector(state => state.movies.movies);

    return (
        <div>
            <h1>Movie Watchlist</h1>
            <Link to="/add-movie">Add Movie</Link>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
