import { carousel } from '../src/lib/Archivos JS/carousel.js';

jest.mock('../__mocks__/main.js');

describe('Test de categoryPost', () => {
  // const component = carousel();

  it('Debería ser una función', () => {
    expect(typeof carousel).toBe('function');
  });
});

describe('Funcion carousel', () => {
  it('La función agrega correctamente un controlador de eventos a los íconos iconRigth y iconLeft', () => {
    const iconRigth = document.createElement('div');
    const iconLeft = document.createElement('div');
    const arrayClassSlider = [];

    // Espía en el método addEventListener
    jest.spyOn(iconRigth, 'addEventListener');
    jest.spyOn(iconLeft, 'addEventListener');

    carousel(iconRigth, iconLeft, arrayClassSlider);

    // Simular un clic en los iconos
    iconRigth.click();
    iconLeft.click();

    expect(iconRigth.addEventListener).toHaveBeenCalled();
    expect(iconLeft.addEventListener).toHaveBeenCalled();
  });
});

describe('Movimiento del carrusel', () => {
  test('El carousel se mueve a la derecha al hacer click en el icono de la derecha', () => {
    // Configurar el escenario del test
    const iconRigth = document.createElement('button');
    const iconLeft = document.createElement('button');
    const arrayClassSlider = [document.createElement('div'), document.createElement('div'), document.createElement('div')];

    // Ejecutar la función
    carousel(iconRigth, iconLeft, arrayClassSlider);
    iconRigth.click();

    // Comprobar el resultado
    expect(arrayClassSlider[0].style.left).toBe('-270px');
    expect(arrayClassSlider[1].style.left).toBe('-270px');
    expect(arrayClassSlider[2].style.left).toBe('-270px');
  });

  test('El carousel se mueve a la izquierda al hacer click en el icono de la izquierda', () => {
    // Configurar el escenario del test
    const iconRigth = document.createElement('button');
    const iconLeft = document.createElement('button');
    const arrayClassSlider = [document.createElement('div'), document.createElement('div'), document.createElement('div')];

    // Ejecutar la función
    carousel(iconRigth, iconLeft, arrayClassSlider);
    iconRigth.click();
    iconLeft.click();

    // Comprobar el resultado
    expect(arrayClassSlider[0].style.left).toBe('-270px');
    expect(arrayClassSlider[0].style.left).toBe('-270px');
    expect(arrayClassSlider[0].style.left).toBe('-270px');
  });
});
