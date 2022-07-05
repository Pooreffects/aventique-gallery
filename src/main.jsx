import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Albums from './components/Albums';
import AlbumPhotos from './components/AlbumPhotos';
import './styles/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="albums" element={<Albums />} />
          <Route path="albums/:id/photos" element={<AlbumPhotos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
