import { login } from '../src/lib/Archivos JS/login.js';

jest.mock('../__mocks__/main.js');

describe('Test de login', () => {
  const component = login();
  const inputEmail = component.querySelector('.input-register');
  const inputPassword = component.querySelector('.input-password');
  const botonRegister = component.querySelector('.buttonRegister');
  const botonGoogle = component.querySelector('.button-google');
  it('Debe ser una función', () => {
    expect(typeof login).toBe('function');
  });
  it('Deberíamos tener un input para email', () => {
    expect(inputEmail.placeholder).toBe('Ingresa tu email:');
  });
  it('Deberíamos tener un input para contraseña', () => {
    expect(inputPassword.placeholder).toBe('Ingresa tu contraseña:');
  });
  it('Debemos tener un boton iniciar sesión', () => {
    expect(botonRegister.innerHTML).toBe('Iniciar Sesión');
  });
  //   it('El boton inicar sesión debe enviar a "/profile"', () => {
  //     botonRegister.click();
  //     expect(window.location.pathname).toBe('/profile');
  //   });
  it('Debemos tener un boton google', () => {
    expect(botonGoogle.innerHTML).toBe('<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png"> Iniciar Sesión con Google');
  });
//   it('El boton google debe enviar a "/login"', () => {
//     botonGoogle.click();
//     expect(window.location.pathname).toBe('/login');
//   });
});
