import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import NotFoundPage from './pages/NotFoundPage';
import FreePage from './pages/FreePage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/me' element={<TaskPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/free' element={<FreePage />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
