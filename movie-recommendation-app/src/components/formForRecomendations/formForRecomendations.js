// src/components/MovieRecommendation.js

import React, { useState } from 'react';
import '../MovieRecommendation.css';
import './formForRecomendations.css';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Movie from '../movie/Movie';




const FormForRecomendations = () => {
    const [movie1, setMovie1] = useState('');
    const [movie2, setMovie2] = useState('');
    const [movie3, setMovie3] = useState('');
    const [mood, setMood] = useState('');
    const [category, setCategory] = useState('');
    const [generalPreferences, setGeneralPreferences] = useState('');
    const [movies, setMovies] = useState([]);
    const supabase = createClient('https://qpqvsikrykfocwygaaxt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcXZzaWtyeWtmb2N3eWdhYXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTY4MDgsImV4cCI6MjAzNDQ3MjgwOH0.5EqtxynLkEzKH2Au3-ls39mNA9CNHhuvz_LTi1_Zy50')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                likedMovie1: movie1,
                likedMovie2: movie2,
                likedMovie3: movie3,
                currentMood: mood,
                preferredCategory: category,
                generalPreferences: generalPreferences
            };
        const { data, error } = await supabase.functions.invoke('chat-gpt', {
            body: dataToSend,
        })
        setMovies(data.response)
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
                    <input
                        type="text"
                        placeholder="Sugerencias Adicionales"
                        value={generalPreferences}
                        onChange={(e) => setGeneralPreferences(e.target.value)}
                    />
                </div>
                <div className="form-recomendations-third">
                    <button type="submit">Enviar</button>
                </div>
                

            </form>
            {(movies.length > 0) && (
                <h2 className="movie-board-title">Recomendaciones</h2>
            )
            }
            <div className="movie-board">
                {movies.map((movie, index) => (
                    <Movie key={index} {...movie} />
                ))}
            </div>
        </div>
            
    );
};

export default FormForRecomendations;