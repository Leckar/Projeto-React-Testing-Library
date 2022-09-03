import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('tests the elements in the Pokédex page', () => {
  const pkmnTested = 'Pikachu';
  const pkmnTestedId = 25;
  const amount = 3;
  const linkName = 'More details';
  test('if Pokémon details can be accessed and works as intended', () => {
    const { history } = renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: linkName });
    expect(moarDetails).toBeInTheDocument();
    userEvent.click(moarDetails);
    expect(history.location.pathname).toBe(`/pokemons/${pkmnTestedId}`);
  });
  test('if the page has all 3 necessary h2 elements', () => {
    renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: linkName });
    userEvent.click(moarDetails);
    const pkmnDetails = screen.getAllByRole('heading', { level: 2 });
    expect(pkmnDetails.length).toBe(amount);
    expect(pkmnDetails[0]).toBeInTheDocument();
    expect(pkmnDetails[0].innerHTML).toBe(`${pkmnTested} Details`);
    expect(pkmnDetails[1]).toBeInTheDocument();
    expect(pkmnDetails[1].innerHTML).toBe('Summary');
    expect(pkmnDetails[2]).toBeInTheDocument();
    expect(pkmnDetails[2].innerHTML).toBe(`Game Locations of ${pkmnTested}`);
  });
  test('if the summary displays the correct text', () => {
    renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: linkName });
    userEvent.click(moarDetails);
    const pikachuSummary = screen
      .getByText(/This intelligent Pokémon roasts hard berries with electricity/i);
    expect(pikachuSummary).toBeInTheDocument();
  });
  test('if the images are being displayed from the correct source', () => {
    renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: linkName });
    userEvent.click(moarDetails);
    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toBe(amount);
    expect(imgs[0].src).toMatch('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imgs[1].src).toMatch('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgs[1].alt).toMatch(`${pkmnTested} location`);
    expect(imgs[2].src).toMatch('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(imgs[2].alt).toMatch(`${pkmnTested} location`);
  });
  test('if there is an element to favorite the pokémon', () => {
    renderWithRouter(<App />);
    const moarDetails = screen.getByRole('link', { name: linkName });
    userEvent.click(moarDetails);
    const label = screen.getByLabelText('Pokémon favoritado?');
    expect(label).toBeInTheDocument();
  });
});
