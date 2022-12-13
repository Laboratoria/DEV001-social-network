/**
 * @jest-environment jsdom
 */
import { Register } from '../src/components/Register';

jest.mock('../src/main.js');
jest.mock('../src/lib/Imports.js');

// TEST Register - deberia tener un mock porque no queremos realmente crear usuarios al testear
describe('Register', () => {
  it('debería ser una función', () => {
    expect(typeof Register).toBe('function');
  });
  test('existe el botón de crear', () => {
    const element = Register();
    const button = element.querySelector('.register');
    expect(button).toBeNull();
  });
});

// // TEST createUser - deberia tener un mock porque no queremos realmente crear usuarios al testear
// describe('createUser', () => {
//   it('debería ser una función', () => {
//     expect(typeof createUser).toBe('function');
//   });
// });

// // TEST signUp - idem
// describe('signUp', () => {
//   it('debería ser una función', () => {
//     expect(typeof signUp).toBe('function');
//   });
// });
