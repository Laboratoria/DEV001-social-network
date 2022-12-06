// import { async } from 'regenerator-runtime';
import { register } from '../src/lib/Archivos JS/register.js';

jest.mock('../__mocks__/main.js');

describe('existe la función register', () => {
  const component = register();
  const botonCreateUser = component.querySelector('.buttonRegister');
  const botonGoToLogin = component.querySelector('.link-login');
  it('Debe ser una función', () => {
    expect(typeof register).toBe('function');
  });
  it('Debemos tener un boton Registrarse', () => {
    expect(botonCreateUser.innerHTML).toBe('Registrarme');
  });
  it('Existe el link que te manda a Login', () => {
    // eslint-disable-next-line no-useless-escape
    expect(botonGoToLogin.innerHTML).toBe('¿Ya tienes cuenta? <a href=\"\"> Iniciar sesión </a>');
  });
  it('El link Iniciar sesión debe enviar a "/login"', () => {
    botonGoToLogin.click();
    expect(window.location.pathname).toBe('/login');
  });
  /* it('El boton createUser debe enviar a "/profile"', async () => {
    await botonCreateUser.click();
    expect(window.location.pathname).toBe('/profile');
  }); */
});
