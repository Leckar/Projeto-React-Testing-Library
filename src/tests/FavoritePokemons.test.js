import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('tests the elements in the Favorite Pokémons page', () => {
  test('if the page has an element when no pokémon are favorite', () => {
    renderWithRouter(<FavoritePokemons />);
    const favPkmn = screen.getByText('No favorite pokemon found');
    expect(favPkmn).toBeInTheDocument();
  });
});
