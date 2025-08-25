import { render, screen } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  it('não renderiza quando open é false', () => {
    render(<Modal open={false} message="Mensagem" />);
    expect(screen.queryByText(/Mensagem/i)).not.toBeInTheDocument();
  });
  it('renderiza mensagem quando open é true', () => {
    render(<Modal open={true} message="Mensagem de teste" confirmText="OK" onConfirm={() => {}} />);
    expect(screen.getByText(/Mensagem de teste/i)).toBeInTheDocument();
    expect(screen.getByText(/OK/i)).toBeInTheDocument();
  });
});
