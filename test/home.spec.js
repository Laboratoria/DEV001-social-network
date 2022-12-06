import { home } from '../src/lib/Archivos JS/home.js';

jest.mock('../__mocks__/main.js');

describe('Test de home', () => {
  const component = home();
  const botonRegister = component.querySelector('.buttonRegister');
  const botonLogin = component.querySelector('.buttonLogin');
  it('Debemos estár ubicados en la raiz "/"', () => {
    expect(window.location.pathname).toBe('/');
  });
  it('Debemos tener un boton register', () => {
    expect(botonRegister.innerHTML).toBe('Regístrate');
  });
  it('El boton Register debe enviar a "/register"', () => {
    botonRegister.click();
    expect(window.location.pathname).toBe('/register');
  });
  it('Debemos tener un boton login', () => {
    expect(botonLogin.innerHTML).toBe('Iniciar sesión');
  });
  it('El boton Login debe enviar a "/login"', () => {
    botonLogin.click();
    expect(window.location.pathname).toBe('/login');
  });
});
