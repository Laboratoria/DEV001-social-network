import { aboutTheApp } from '../src/lib/Archivos JS/aboutTheApp';

jest.mock('../__mocks__/main.js');

describe('Test de aboutTheApp', () => {
  const component = aboutTheApp();
  const description = component.querySelector('.text-description');
  const imgWelcome = component.querySelector('.img-welcome3');
  const avatar = component.querySelector('.avatarIcon-class');
  const rulesTitles = component.querySelector('.title-register');
  it('Debe ser una función', () => {
    expect(typeof aboutTheApp).toBe('function');
  });
  it('Debemos tener una descripción tipo texto', () => {
    expect(typeof description).toBe('object');
  });
  it('Debemos tener una descripción que incluya el resumen de la app', () => {
    expect(description.innerHTML).toBe('"24/7 es una red social para todas las mujeres en Latinoamérica. Una herramiento en la que pueden  encontrar recursos sobre seguridad, salud, apoyo emocional, y mucho más. Una red de apoyo que estará ahí para nosotras, 24/7."');
  });
  it('Debería tener una imagen tipo img', () => {
    expect(typeof imgWelcome).toBe('object');
  });
  it('Debemos tener una foto de perfil', () => {
    expect(typeof avatar).toBe('object');
  });
  it('Debemos tener un título para las reglas tipo texto', () => {
    expect(typeof rulesTitles).toBe('object');
  });
  it('Debemos tener una titulo que incluya qué puedes hacer en la app', () => {
    expect(rulesTitles.innerHTML).toBe('¿Qué puedes hacer en 24/7?');
  });
});
