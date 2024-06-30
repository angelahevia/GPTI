import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import MyRecomendations from './components/myRecomendations/myRecomedations';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={<App />} />
        <Route path="recomendations" element={<MyRecomendations />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);