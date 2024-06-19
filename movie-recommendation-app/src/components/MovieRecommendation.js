// src/components/MovieRecommendation.js

import React, { useState } from 'react';
import axios from 'axios';
import './MovieRecommendation.css';
import logo from './logo.jpg';
import poster1 from './poster1.png';
import poster2 from './poster2.jpg';
import poster3 from './poster3.jpg';
import FormForRecomendations from './formForRecomendations/formForRecomendations';

const MovieRecommendation = () => {
  const [mood, setMood] = useState('');
  const [category, setCategory] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(mood, category);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="movie-recommendation">
      <header className="header">
        <img src={logo} className='imdb-logo' alt="IMDb Logo" style={{ width: '300px', height: 'auto' }}/>
        <button className="header-button">Mis <br></br> Recomendaciones</button>
      </header>
      <h1>Bienvenido a la pagina de recomendaciones de peliculas de IMDb</h1>
      <p>Para obtener tu recomendacion debes ingresar tres peliculas de tu interes, estado de animo y seleccionar una categoria.
      </p>
      <FormForRecomendations />
      <div className="recommendations">
        {recommendations.map((movie, index) => (
          <div key={index} className="movie">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
      <div className="posters">
        <img src={poster1} alt="Movie Poster 1" />
        <img src={poster2} alt="Movie Poster 2" />
        <img src={poster3} alt="Movie Poster 3" />
      </div>
    </div>
  );
};

export default MovieRecommendation;