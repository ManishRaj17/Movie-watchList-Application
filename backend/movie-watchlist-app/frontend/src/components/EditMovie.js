// frontend/src/components/EditMovie.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../redux/actions/movies';
import { useParams, useHistory } from 'react-router-dom';

const EditMovie = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movies.movies.find(m => m._id === id));

    const [formData, setFormData] = useState({
        title: movie ? movie.title : '',
        description: movie ? movie.description : '',
        releaseYear: movie ? movie.releaseYear : '',
        genre: movie ? movie.genre : '',
    });

    useEffect(() => {
        if (movie) {
            setFormData({
                title: movie.title,
                description: movie.description,
                releaseYear: movie.releaseYear,
                genre: movie.genre,
            });
        }
    }, [movie]);

    const { title, description, releaseYear, genre } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        dispatch(editMovie(id, formData));
        history.push('/');
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={onChange}
                    required
                />
            </div>
            <div>
                <textarea
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={onChange}
                ></textarea>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Release Year"
                    name="releaseYear"
                    value={releaseYear}
                    onChange={onChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    value={genre}
                    onChange={onChange}
                />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditMovie;
