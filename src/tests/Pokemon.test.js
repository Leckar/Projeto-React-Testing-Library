import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('6 - Teste o componente <Pokemon.js />', () => {
  const pkmnTested = 'Pikachu';
  test('if the initial pokémon has the correct name and sprite', () => {
    renderWithRouter(<App />);
    const pkmnName = screen.getByText(pkmnTested);
    expect(pkmnName).toBeInTheDocument();
    const pkmnSprite = screen.getAllByRole('img')[0];
    expect(pkmnSprite).toBeInTheDocument();
    expect(pkmnSprite.src).toMatch('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pkmnSprite.alt).toMatch(`${pkmnTested} sprite`);
  });
  test('if the pokémon has the correct typing', () => {
    renderWithRouter(<App />);
    const pkmnType = screen.getByTestId('pokemon-type');
    expect(pkmnType.innerHTML).toBe('Electric');
  });
  test('if the More details link exists and work', () => {
    renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: 'More details' });
    expect(moarDetails).toBeInTheDocument();
    expect(moarDetails.href).toMatch('/pokemons/25');
  });
  test('if the star has ben added to the favorites and checks its attributes', () => {
    renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: 'More details' });
    userEvent.click(moarDetails);
    const favBox = screen.getByRole('checkbox', { id: 'favorite' });
    userEvent.click(favBox);
    const goHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(goHome);
    const star = screen.getAllByRole('img', { class: 'favorite-icon' });
    expect(star[1]).toBeInTheDocument();
    expect(star[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(star[1]).toHaveAttribute('alt', `${pkmnTested} is marked as favorite`);
  });
});
