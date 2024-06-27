// frontend/src/redux/actions/movies.js
import axios from 'axios';
import {
    ADD_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    TOGGLE_WATCHED,
    RATE_MOVIE,
    REVIEW_MOVIE,
} from './types';

// Add Movie
export const addMovie = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post('/api/movies', formData, config);

        dispatch({
            type: ADD_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

// Edit Movie
export const editMovie = (id, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.put(`/api/movies/${id}`, formData, config);

        dispatch({
            type: EDIT_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

// Delete Movie
export const deleteMovie = id => async dispatch => {
    try {
        await axios.delete(`/api/movies/${id}`);

        dispatch({
            type: DELETE_MOVIE,
            payload: id,
        });
    } catch (err) {
        console.error(err);
    }
};

// Toggle Watched
export const toggleWatched = id => async dispatch => {
    try {
        const res = await axios.put(`/api/movies/${id}/toggle`);

        dispatch({
            type: TOGGLE_WATCHED,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

// Rate Movie
export const rateMovie = (id, rating) => async dispatch => {
    try {
        const res = await axios.put(`/api/movies/${id}/rate`, { rating });

        dispatch({
            type: RATE_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};

// Review Movie
export const reviewMovie = (id, review) => async dispatch => {
    try {
        const res = await axios.put(`/api/movies/${id}/review`, { review });

        dispatch({
            type: REVIEW_MOVIE,
            payload: res.data,
        });
    } catch (err) {
        console.error(err);
    }
};
