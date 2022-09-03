import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('2 - Teste o componente <About.js />', () => {
  test('if the heading exist with the correct text', () => {
    renderWithRouter(<About />);
    const h2 = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(h2).toBeInTheDocument();
  });
  test('if the picture exists with the correct source link', () => {
    renderWithRouter(<About />);
    const img = screen.getByRole('img',
      { alt: 'Pokédex' });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
