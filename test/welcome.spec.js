import { welcome } from '../src/components/welcome.js';

jest.mock('../__mocks__/main.js');

describe('Test de welcome', () => {
  const component = welcome();
  const botonSignUp = component.querySelector('.btnSignUp');
  const botonSignIn = component.querySelector('.btnSignIn');

  /*   it('Deberia mostrarnos la pagina de bienvenida "/"', () => {
    expect(window.location.pathname).toBe('/');
  });
 */
  it('Deberia contener un boton de registro', () => {
    expect(botonSignUp.innerHTML).toBe('Sign Up');
  });
  it('Debería dirigirnos a la pantalla de registro', () => {
    botonSignUp.click();
    expect(window.location.pathname).toBe('/signUp');
  });
  it('Debería contener un boton de inicio de sesión', () => {
    expect(botonSignIn.innerHTML).toBe('Sign In');
  });
  it('Debería dirigirnos a la pantalla de inicio de sesión', () => {
    botonSignIn.click();
    expect(window.location.pathname).toBe('/signIn');
  });
});
