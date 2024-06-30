import React, {useEffect, useState} from 'react';
import './MovieRecommended.css';
import movieImage from '../movie-display.png';

const MovieRecommended = ({ title, rating, year, calification, onSubmit }) => {
    const [stars, setStars] = useState(0);
    const [hover, setHover] = useState(0);
    

    const handleClick = (newRating) => {
        setStars(newRating);
    };

    const handleMouseEnter = (newHover) => {
        setHover(newHover);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    useEffect(() => {
        if (calification) {
            setStars(calification);
        }
    }, []);

    return (
        <div className="movie">
            <img src={movieImage} alt={title} className="movie-image" />
            <h3 className="movie-title">{title}</h3>
            <p className="movie-rating">Año: {year}</p>
            <p className="movie-rating">Rating: {rating}</p>
            <h3 className="movie-title">¿Como calificas la recomendación?</h3>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => handleClick(ratingValue)}
                            />
                            <svg
                                className="star"
                                viewBox="0 0 24 24"
                                fill={
                                    ratingValue <= (hover || stars)
                                        ? '#ffc107'
                                        : '#e4e5e9'
                                }
                                onMouseEnter={() => handleMouseEnter(ratingValue)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </label>
                    );
                })}
                <button onClick={() => onSubmit(stars, title)}>Enviar Review</button>
            </div>
        </div>
    );
};

export default MovieRecommended;
