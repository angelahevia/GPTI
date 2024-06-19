// src/components/MovieRecommendation.js

import React, { useState } from 'react';
import axios from 'axios';
import '../MovieRecommendation.css';
import './formForRecomendations.css';

const FormForRecomendations = () => {
    const [movie1, setMovie1] = useState('');
    const [movie2, setMovie2] = useState('');
    const [movie3, setMovie3] = useState('');
    const [mood, setMood] = useState('');
    const [category, setCategory] = useState('');
    const [recommendations, setRecommendations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                movie1: movie1,
                movie2: movie2,
                movie3: movie3,
                mood: mood,
                category: category
            };
            console.log(data);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    return (
        <div className='movie-recommendation'>
            <form onSubmit={handleSubmit} className="form-recomendations">
                <div className="form-recomendations-first">
                  <input
                      type="text"
                      placeholder="Pelicula 1"
                      value={movie1}
                      onChange={(e) => setMovie1(e.target.value)}
                  />
                  <input
                      type="text"
                      placeholder="Pelicula 2"
                      value={movie2}
                      onChange={(e) => setMovie2(e.target.value)}
                  />
                  <input
                      type="text"
                      placeholder="Pelicula 3"
                      value={movie3}
                      onChange={(e) => setMovie3(e.target.value)}
                  />
                </div>
                <div className="form-recomendations-second">
                    <input
                        type="text"
                        placeholder="Estado de Animo"
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                    />

                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Seleccionar Categoria</option>
                        <option value="Ciencia Ficcion">Ciencia Ficción</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Otra">Otra</option>
                    </select>
                    <button type="submit">Obtener recomendaciones</button>
                </div>

            </form>
        </div>
            
    );
};

export default FormForRecomendations;