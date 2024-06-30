import React from 'react';
import './Movie.css';
import movieImage from '../movie-display.png';

const Movie = ({ title, rating, year }) => {
    return (
        <div className="movie">
            <img src={movieImage} alt={title} className="movie-image" />
            <h3 className="movie-title">{title}</h3>
            <p className="movie-rating">Año: {year}</p>
            <p className="movie-rating">Rating: {rating}</p>
        </div>
    );
};

export default Movie;
