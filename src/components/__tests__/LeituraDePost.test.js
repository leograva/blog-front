import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import LeituraDePost from '../LeituraDePost';

describe('LeituraDePost', () => {
  it('renderiza componente sem crashar', () => {
    render(
      <MemoryRouter initialEntries={["/leitura/1"]}>
        <LeituraDePost />
      </MemoryRouter>
    );
    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
  });
});
