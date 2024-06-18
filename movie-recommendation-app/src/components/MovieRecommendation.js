// src/components/MovieRecommendation.js

import React, { useState } from 'react';
import axios from 'axios';
import './MovieRecommendation.css';
import logo from './logo.jpg';
import poster1 from './poster1.png';
import poster2 from './poster2.jpg';
import poster3 from './poster3.jpg';

const MovieRecommendation = () => {
  const [mood, setMood] = useState('');
  const [category, setCategory] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/recommend', { mood, category });
      // setRecommendations(response.data.recommendations);
      // console log de mood y cateory
      console.log(mood, category);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="movie-recommendation">
      <header className="header">
        <img src={logo} alt="IMDb Logo" style={{ width: '300px', height: 'auto' }}/>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter your mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
          <button type="submit">Get Recommendations</button>
        </form>
      </header>
      <h1>Welcome to the IMDb recommendation page!</h1>
      <p>This page is boosted by AI to recommend you the best movies for your evening</p>
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