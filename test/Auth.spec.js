const signUp = require('../src/lib/Auth');

test('signUp es una función', () => {
  expect(signUp).toBe('function');
});

// import { createUser, signUp } from '../src/lib/Auth';

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
