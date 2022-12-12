import { contact } from '../src/lib/Archivos JS/contact.js';

jest.mock('../__mocks__/main.js');

describe('Test de Contact', () => {
  const component = contact();
  const title = component.querySelector('.class-messageText');
  const nameCards = component.querySelector('.class-nameCards');
  const cardsDescription = component.querySelector('.class-cardsDescription');
  const linkGaby = component.querySelector('#gabriela-github');
  const linkSilvia = component.querySelector('#silvia-github');
  const linkValeria = component.querySelector('#valeria-github');
  it('Debe ser una función', () => {
    expect(typeof contact).toBe('function');
  });
  it('Debemos tener un título tipo texto', () => {
    expect(typeof title).toBe('object');
  });
  it('Debemos tener un título de Nuestro Equipo', () => {
    expect(title.innerHTML).toBe('Nuestro Equipo');
  });
  it('Las tarjetas deberían tener un nombre', () => {
    expect(nameCards.innerHTML).toBe('Gabriela Zambrano');
  });
  it('Las tarjetas deberían tener una descripción', () => {
    expect(cardsDescription.innerHTML).toBe('FRONT-END DEVELOPER');
  });
  it('Las tarjetas deberían tener un link que redireccione al Github de Gaby', () => {
    expect(linkGaby.href).toBe('https://github.com/Ruth-Gabriela');
  });
  it('Las tarjetas deberían tener un link que redireccione al Github de Silvia', () => {
    expect(linkSilvia.href).toBe('https://github.com/SilviBibi');
  });
  it('Las tarjetas deberían tener un link que redireccione al Github de Valeria', () => {
    expect(linkValeria.href).toBe('https://github.com/valeriamurguiag');
  });
});
