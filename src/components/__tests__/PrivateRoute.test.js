import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

describe('PrivateRoute', () => {
  it('renderiza children sem crashar', () => {
    render(
      <MemoryRouter>
        <PrivateRoute>
          <div>Conteúdo Protegido</div>
        </PrivateRoute>
      </MemoryRouter>
    );
  });
});
