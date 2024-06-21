// src/components/MovieRecommendation.js

import React, { useState } from 'react';
import './myRecomendations.css';
import '../MovieRecommendation.css';
import logo from '../logo.jpg';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Movie from '../movie/Movie';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MyRecomendations = () => {
    const [movies, setMovies] = useState([]);
    const supabase = createClient('https://qpqvsikrykfocwygaaxt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcXZzaWtyeWtmb2N3eWdhYXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4OTY4MDgsImV4cCI6MjAzNDQ3MjgwOH0.5EqtxynLkEzKH2Au3-ls39mNA9CNHhuvz_LTi1_Zy50')
    const getData = async (e) => {
        try {
            const { data: recommendedMovies, fetchError } = await supabase
                .from('recommendations')
                .select('*')
            setMovies(recommendedMovies)
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    useState(() => {
        getData()
    }
        , [])

    return (
        <div className='movie-recommendation'>
            <header className="header">
                <img src={logo} className='imdb-logo' alt="IMDb Logo" style={{ width: '300px', height: 'auto' }} />
                <Link to="/">
                    <button className="header-button" onClick={()=>{redirect('/')}}>Volver</button>
                </Link>
            </header>
            <h1>Mis Recomendaciones</h1>
            <p>Estas son las recomendaciones de películas que hemos seleccionado para ti.</p>
            {(movies.length <= 0) && (
                <h2 className="movie-board-title">No Posees Recomendaciones</h2>
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

export default MyRecomendations;