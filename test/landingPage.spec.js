import { landingPage } from '../src/lib/Archivos JS/landingPage';

jest.mock('../__mocks__/main.js');

describe('Test de landingPage', () => {
  const component = landingPage();
  const containerLandingPage = component.querySelector('.containerLandingPage');
  const containerHeader = component.querySelector('.containerHeader');
  const iconMenu = component.querySelector('.icon-menu');
  const divSlider = component.querySelector('.imgSlider');
  const slider1 = component.querySelector('.slider-img');
  const btnleft = component.querySelector('.btnSlider1');
  const btnRight = component.querySelector('.btnSlider2');
  const containerCategories = component.querySelector('.containerCategories');
  const categoriesDiv = component.querySelector('.class-categories');
  const categoriesText = component.querySelector('.text-categories');
  const postDiv = component.querySelector('.class-postDiv');
  const subtitlePost = component.querySelector('.subtitle-post');
  const postDescriptionContent = component.querySelector('.text-content-post-description');
  const btnPost = component.querySelector('.button-post');
  const containerPosts = component.querySelector('.containerPosts');

  it('Debe ser una función', () => {
    expect(typeof landingPage).toBe('function');
  });
  it('Debemos tener un contenedor para todos los elementos de la página', () => {
    expect(typeof containerLandingPage).toBe('object');
  });
  it('Debemos tener un contenedor para el encabezado', () => {
    expect(typeof containerHeader).toBe('object');
  });
  it('Debemos tener un ícono de menu', () => {
    expect(typeof iconMenu).toBe('object');
  });
  it('Debemos tener un contenedor para el slider', () => {
    expect(typeof divSlider).toBe('object');
  });
  it('Debemos tener un slider tipo img', () => {
    expect(typeof slider1).toBe('object');
  });
  it('Debemos tener un contenedor para las categorías', () => {
    expect(typeof containerCategories).toBe('object');
  });
  it('Debemos tener un contenedor para cada categorías individual', () => {
    expect(typeof categoriesDiv).toBe('object');
  });
  it('Debemos tener botón para mover el slider a la izquierda tipo button', () => {
    expect(typeof btnleft).toBe('object');
  });
  it('Debemos tener botón para mover el slider a la derecha tipo button', () => {
    expect(typeof btnRight).toBe('object');
  });
  it('Debemos tener un texto para cada cada categoría', () => {
    expect(categoriesText.innerHTML).toBe('Salud');
  });
  it('Debemos tener un contenedor para escribir un post', () => {
    expect(typeof postDiv).toBe('object');
  });
  it('Debemos tener un subtitulo para escribir un post', () => {
    expect(subtitlePost.innerHTML).toBe('Comparte con Nosotras:');
  });
  it('Debemos tener un placeholder antes de escribir un post', () => {
    expect(postDescriptionContent.placeholder).toBe('Quiero compartir con ustedes...');
  });
  it('Debemos tener un botón para publicar', () => {
    expect(typeof btnPost).toBe('object');
  });
  it('Debemos tener un botón para publicar que diga Publicar', () => {
    expect(btnPost.innerHTML).toBe('Publicar');
  });
  it('Debemos tener un contenedor para los posts', () => {
    expect(typeof containerPosts).toBe('object');
  });
});
