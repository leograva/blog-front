import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renderiza o título do blog', () => {
    render(<Header />);
    expect(screen.getByText(/Blog de Postagens/i)).toBeInTheDocument();
  });
});
