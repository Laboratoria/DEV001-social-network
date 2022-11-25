// importamos la funcion que vamos a testear
// import { auth } from '../src/lib/Archivos JS/firebase.js';//
// import { async } from "regenerator-runtime";
import { functionRegister, functionLogin, functionRegisterGoogle } from '../src/lib/Archivos JS/index.js';

// Test a functionRegister
describe('myFunctionRegister', () => {
  it('debería ser una función', () => {
    expect(typeof functionRegister).toBe('function');
  });
  it('debería retornar un objeto con la propiedad email', () => functionRegister('ruth.pz@gmail.com', '1234ruth', 'Gaby').then(
    (user) => {
      expect(user.email).toBe('ruth.pz@gmail.com');
    },
  ));

  it('debería retornar un objeto con la propiedad password', () => functionRegister('ruth.pz@gmail.com', '1234ruth', 'Gaby').then(
    (user) => {
      expect(user.password).toBe('1234ruth');
    },
  ));

  it('debería retornar un error', () => functionRegister('ruth.pz@gmail.com', '1234ruth', 'Gaby').then((user) => {
    expect(user.email).toBe('ruth.pz@gmail.com');
  }));
});

// Test a functionLogin
describe('myFunctionLogin', () => {
  it('debería ser una función', () => {
    expect(typeof functionLogin).toBe('function');
  });
  it('debería retornar un objeto con la propiedad email', () => functionLogin('valeriamurguia98@gmail.com', 'vale123').then((user) => {
    expect(user.email).toBe('valeriamurguia98@gmail.com');
  }));
  it('debería retornar un error', async () => {
    await functionLogin('valeriamurguia98@gmail.com', 'valeria1234').then((user) => {
      expect(user.password).toBe('valeria1234');
    });
  });
});

// Test a functionRegisterGoogle
describe('myFun awaitctionRegisterGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof functionRegisterGoogle).toBe('function');
  });

  /* it('debería retornar un error', () => {
    functionRegisterGoogle().then(
      () => {
        expect('error').toBe('error');
      },
    );
  }); */
});
