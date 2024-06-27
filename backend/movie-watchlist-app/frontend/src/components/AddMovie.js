// frontend/src/components/AddMovie.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions/movies';

const AddMovie = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        releaseYear: '',
        genre: '',
    });

    const { title, description, releaseYear, genre } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        dispatch(addMovie(formData));
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
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
