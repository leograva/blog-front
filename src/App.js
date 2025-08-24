import React from 'react';
import { useEffect, useState } from "react"
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import ListaDePosts from './components/ListaDePosts'
import LeituraDePost from './components/LeituraDePost'
import CriacaoDePost from './components/CriacaoDePost'
import EdicaoDePost from './components/EdicaoDePost'
import PaginaAdministrativa from './components/PaginaAdministrativa'

const pages = {
  0: <ListaDePosts />,
  1: <LeituraDePost />,
  2: <CriacaoDePost />,
  3: <EdicaoDePost />,
  4: <PaginaAdministrativa />
};

function App() {
 
  return (
    <div className="App">
      <Header />
      <Menu />
      <CriacaoDePost />
    </div>
  );
}

export default App;
