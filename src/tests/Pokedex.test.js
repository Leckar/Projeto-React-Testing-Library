import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('tests the elements in the Pokédex page', () => {
  test('if the page has a h2 element with the correct text', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    expect(h2).toBeInTheDocument();
  });
  test('if there is a button to show the next Pokémon', () => {
    renderWithRouter(<App />);
    const bttn = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(bttn).toBeInTheDocument();
  });
  test('if the "All" button exists', () => {
    renderWithRouter(<App />);
    const bttn = screen.getByRole('button', { name: 'All' });
    expect(bttn).toBeInTheDocument();
  });
  test('if the "All" button exists', () => {
    renderWithRouter(<App />);
    const bttn = screen.getByRole('button', { name: 'All' });
    userEvent.click(bttn);
  });
  test('if there is are 8 buttons to filter by type', () => {
    renderWithRouter(<App />);
    const typeBttnCount = 7;
    const typeBttns = screen.getAllByTestId('pokemon-type-button');
    expect(typeBttns.length).toBe(typeBttnCount);
  });
  test('if the 8 buttons have the correct text', () => {
    renderWithRouter(<App />);
    const bttnTexts = ['Electric', 'Fire', 'Bug',
      'Poison', 'Psychic', 'Normal', 'Dragon'];
    const typeBttns = screen.getAllByTestId('pokemon-type-button');
    const bttnChecker = typeBttns
      .every(({ innerHTML }) => bttnTexts
        .some((type) => type === innerHTML));
    expect(bttnChecker).toBe(true);
  });
});
