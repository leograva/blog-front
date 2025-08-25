
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import ListaDePosts from './components/ListaDePosts';
import LeituraDePost from './components/LeituraDePost';
import CriacaoDePost from './components/CriacaoDePost';
import EdicaoDePost from './components/EdicaoDePost';
import PaginaAdministrativa from './components/PaginaAdministrativa';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<ListaDePosts />} />
          <Route path="/leitura/:id" element={<LeituraDePost />} />
          <Route path="/criar" element={<CriacaoDePost />} />
          <Route path="/editar/:id" element={<EdicaoDePost />} />
          <Route path="/admin" element={<PaginaAdministrativa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
