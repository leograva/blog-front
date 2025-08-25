import { render, screen, fireEvent } from '@testing-library/react';
import CriacaoDePost from '../CriacaoDePost';

describe('CriacaoDePost', () => {
  it('renderiza campos do formulário', () => {
    render(<CriacaoDePost />);
    expect(screen.getByLabelText(/Título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Conteúdo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Autor/i)).toBeInTheDocument();
    expect(screen.getByText(/Publicar/i)).toBeInTheDocument();
  });
});
