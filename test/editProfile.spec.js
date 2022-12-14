/* import { editProfile } from '../src/lib/Archivos JS/editProfile';

jest.mock('../__mocks__/main.js');

describe('Test de editProfile', () => {
  const component = editProfile();
  const title = component.querySelector('.title-register');
  const subtitle = component.querySelector('.text-subtitle2');
  const descriptionTextArea = component.querySelector('.text-content-description-2');
  const saveChanges = component.querySelector('.buttonRegister');
  it('Debe ser una función', () => {
    expect(typeof editProfile).toBe('function');
  });
  it('Debemos tener un título tipo texto', () => {
    expect(typeof title).toBe('object');
  });
  it('Debemos tener un título que diga Mi Perfil', () => {
    expect(title.innerHTML).toBe('Mi Perfil');
  });
  it('Debemos tener un subtítulo tipo texto', () => {
    expect(typeof subtitle).toBe('object');
  });
  it('Debemos tener un subtítulo que diga Editar Nombre de Usuario', () => {
    expect(subtitle.innerHTML).toBe('Editar Nombre de Usuario:');
  });
  it('Debemos tener un cuadro te texto para editar descripción', () => {
    expect(descriptionTextArea.placeholder).toBe('Hola, me encanta mucho...');
  });
  it('Debemos tener un botón para guardar cambios', () => {
    expect(saveChanges.innerHTML).toBe('Guardar Cambios');
  });
}); */
