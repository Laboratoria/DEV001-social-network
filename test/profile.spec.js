import { profile } from '../src/lib/Archivos JS/profile.js';

jest.mock('../__mocks__/main.js');

describe('existe la función profile', () => {
  const component = profile();
  const botonHome = component.querySelector('.buttonRegister');
  const botonEditarPerfil = component.querySelector('.buttonEditProfile');
  it('Debe ser una función', () => {
    expect(typeof profile).toBe('function');
  });
  it('Debemos tener un boton Home', () => {
    expect(botonHome.innerHTML).toBe('Ir al Home');
  });
  it('El link Home debe enviar a "/landingPage"', () => {
    botonHome.click();
    expect(window.location.pathname).toBe('/landingPage');
  });
  it('Debemos tener un boton Editar Perfil', () => {
    expect(botonEditarPerfil.innerHTML).toBe('Editar Perfil');
  });
  /* it('El boton createUser debe enviar a "/profile"', async () => {
      await botonCreateUser.click();
      expect(window.location.pathname).toBe('/profile');
    }); */
});
