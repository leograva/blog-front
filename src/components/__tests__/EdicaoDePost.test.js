import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import EdicaoDePost from '../EdicaoDePost';

describe('EdicaoDePost', () => {
  it('renderiza título do formulário', () => {
    render(
      <MemoryRouter initialEntries={["/editar/1"]}>
        <EdicaoDePost />
      </MemoryRouter>
    );
    expect(screen.getByText(/Edição de Postagem/i)).toBeInTheDocument();
  });
});