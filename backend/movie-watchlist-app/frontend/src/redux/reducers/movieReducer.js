// frontend/src/redux/reducers/movieReducer.js
const initialState = {
    movies: [],
    movie: null,
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, payload],
                loading: false,
            };
        case 'EDIT_MOVIE':
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === payload._id ? payload : movie),
                loading: false,
            };
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter(movie => movie._id !== payload),
                loading: false,
            };
        case 'TOGGLE_WATCHED':
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === payload._id ? { ...movie, watched: !movie.watched } : movie),
                loading: false,
            };
        case 'RATE_MOVIE':
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === payload._id ? { ...movie, rating: payload.rating } : movie),
                loading: false,
            };
        case 'REVIEW_MOVIE':
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === payload._id ? { ...movie, review: payload.review } : movie),
                loading: false,
            };
        default:
            return state;
    }
}
