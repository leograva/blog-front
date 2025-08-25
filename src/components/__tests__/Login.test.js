import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import Login from '../Login';

describe('Login', () => {
  it('renderiza campos de usuário e senha', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/Usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
  });

  it('exibe erro ao tentar login inválido', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Usuário/i), { target: { value: 'x' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'y' } });
    fireEvent.click(screen.getByText(/Entrar/i));
    expect(screen.getByText(/inválidos/i)).toBeInTheDocument();
  });
});
