import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('4 - Teste o componente <NotFound.js />', () => {
  test('if the heading exist with the correct text', () => {
    renderWithRouter(<NotFound />);
    const h2 = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji', level: 2 });
    expect(h2).toBeInTheDocument();
  });
  test('if the picture exists with the correct source link', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getAllByRole('img',
      { alt: 'Pikachu crying because the page requested was not found' });
    expect(img[1]).toBeInTheDocument();
    expect(img[1].src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
