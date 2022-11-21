// importamos la funcion que vamos a testear
// import { auth } from '../src/lib/Archivos JS/firebase.js';//
import { functionRegister, functionLogin, functionRegisterGoogle } from '../src/lib/Archivos JS/index.js';

// Test a functionRegister
describe('myFunctionRegister', () => {
  it('debería ser una función', () => {
    expect(typeof functionRegister).toBe('function');
  });
  it('debería retornar un objeto con la propiedad email', () => {
    functionRegister('ruth.pz@gmail.com', '1234ruth', 'Gaby').then((user) => {
      expect(user.email).toBe('ruth.pz@gmail.com');
    });
  });
  it('debería retornar un error', () => {
    functionRegister('ruth.pz@gmail', '1234ruth', 'Gaby').then((user) => {
      expect('error').toBe('error');
    });
  });
});

// Test a functionLogin
describe('myFunctionLogin', () => {
  it('debería ser una función', () => {
    expect(typeof functionLogin).toBe('function');
  });
  it('debería retornar un objeto con la propiedad email', () => {
    functionLogin('valeriamurguia98@gmail.com', 'vale123').then((user) => {
      expect(user.email).toBe('valeriamurguia98@gmail.com');
    });
  });
  it('debería retornar un error', () => {
    functionLogin('valeriamurguia98@gmail.com', 'val').then((user) => {
      expect('error').toBe('error');
    });
  });
});

// Test a functionRegisterGoogle
describe('myFunctionRegisterGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof functionRegisterGoogle).toBe('function');
  });
  // it('debería retornar un objeto con la propiedad emailVerified', () => {
  //   functionRegisterGoogle().then((user) => {
  //     expect(user.emailVerified).toBe('true');
  //   });
  // });
  it('debería retornar un error', () => {
    functionRegisterGoogle().then((user) => {
      expect('error').toBe('error');
    });
  });
});
