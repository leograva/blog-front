import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListaDePosts from '../ListaDePosts';

describe('ListaDePosts', () => {
  it('renderiza campo de busca', () => {
    render(
      <BrowserRouter>
        <ListaDePosts />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText(/Buscar posts/i)).toBeInTheDocument();
    expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
    expect(screen.getByText(/Limpar/i)).toBeInTheDocument();
  });
});
