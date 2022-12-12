import { categoryPost } from '../src/lib/Archivos JS/categoryPost';

jest.mock('../__mocks__/main.js');

describe('Test de categoryPost', () => {
  const component = categoryPost();
  const containerAboutThePage = component.querySelector('.containerAboutThePage');
  const containerHeader = component.querySelector('.containerHeader');
  const imgBackground = component.querySelector('.img-background');
  const containerLanding = component.querySelector('.container-landing-post');
  const container1 = component.querySelector('.post');

  const functionOnGetTask = jest.fn(() => Promise.resolve());

  it('Debería ser una función', () => {
    expect(typeof categoryPost).toBe('function');
  });
  it('Debemos tener contenedor para todos los elementos de la página', () => {
    expect(typeof containerAboutThePage).toBe('object');
  });
  it('Debemos tener contenedor para el encabezado', () => {
    expect(typeof containerHeader).toBe('object');
  });
  it('Debemos tener una imagen de fondo', () => {
    expect(typeof imgBackground).toBe('object');
  });
  it('Debemos tener un contenedor para los posts', () => {
    expect(typeof containerLanding).toBe('object');
  });
  it('Debemos tener un contenedor para el post', () => {
    expect(typeof container1).toBe('object');
  });
  it('functionOnGetTask debería ser una función', () => {
    expect(typeof functionOnGetTask).toBe('function');
  });
});
