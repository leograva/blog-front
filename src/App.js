
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import ListaDePosts from './components/ListaDePosts';
import LeituraDePost from './components/LeituraDePost';
import CriacaoDePost from './components/CriacaoDePost';
import EdicaoDePost from './components/EdicaoDePost';
import PaginaAdministrativa from './components/PaginaAdministrativa';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f7f7f7;
  }
`;
const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
  background: #fff;
  min-height: 100vh;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  @media (max-width: 600px) {
    padding: 4px;
  }
`;

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<ListaDePosts />} />
            <Route path="/leitura/:id" element={<LeituraDePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criar" element={
              <PrivateRoute>
                <CriacaoDePost />
              </PrivateRoute>
            } />
            <Route path="/editar/:id" element={
              <PrivateRoute>
                <EdicaoDePost />
              </PrivateRoute>
            } />
            <Route path="/admin" element={
              <PrivateRoute>
                <PaginaAdministrativa />
              </PrivateRoute>
            } />
          </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App;
