/* eslint-disable import/first */
/* eslint-disable jest/no-identical-title */
// importamos la funcion que vamos a testear
// import { auth } from '../src/lib/Archivos JS/firebase.js';//
// import { async } from "regenerator-runtime";

jest.mock('firebase/auth');
// import { createUserWithEmailAndPassword } from 'firebase/auth';

import {
  functionRegister, functionLogin, functionRegisterGoogle, functionGetTask,
  functionSignOut, functionDeleteTask, functionGetTask2, functionUpdateTask, functionSaveTask,
} from '../src/lib/Archivos JS/index.js';

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

  /*  it('Ejecuta createUserWithEmailAndPassword()', () => {
    const email = 'marianita@gmail.com';
    const password = '123';

    functionRegister(email, password);
    expect(createUserWithEmailAndPassword(auth, email, password)).toHaveBeenCalled();
  }); */

  // it('debería retornar el string "La contraseña debe tener al menos 6 carácteres"', () => {
  //   const prueba = createUserWithEmailAndPassword();
  //   functionRegister('valeriamurguia98@gmail.com', 'val').then(() => {
  //     expect(prueba.message).toBe('La contraseña debe tener al menos 6 carácteres');
  //   });
  // });
  // it('tests error with async/await and rejects', async () => {
  //   functionRegister('valeriamurguia98@gmail.com', 'val').then((user) =>
  // expect.assertions(user.message).toBe({
  //     error: 'La contraseña debe tener al menos 6 carácteres',
  //   }));
  // });
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
  // it('debería retornar un error', async () => {
  //   functionLogin('valeriamurguia98@gmail.com', 'val').then(() => {
  //     expect(user.password).toBe('error');
  //   });
  // });
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

// Test a functionSaveTask
describe('myFunctionSaveTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionSaveTask).toBe('function');
  });
});

// Test a functionOnGetTask
describe('myFunctionGetTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionGetTask).toBe('function');
  });
});

// Test a functionSignOut
describe('myFunctionSignOut', () => {
  it('debería ser una función', () => {
    expect(typeof functionSignOut).toBe('function');
  });
});

// Test a functionDeleteTask
describe('myFunctionDeleteTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionDeleteTask).toBe('function');
  });
});

// Test a functionGetTask2
describe('myFunctionGetTask2', () => {
  it('debería ser una función', () => {
    expect(typeof functionGetTask2).toBe('function');
  });
});

// Test a functionUpdateTask
describe('myFunctionUpdateTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionUpdateTask).toBe('function');
  });
});

// Test a functionGetTask

// Test a functionOnGetTask
describe('myFunctionGetTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionGetTask).toBe('function');
  });
});

// Test a functionSignOut
describe('myFunctionSignOut', () => {
  it('debería ser una función', () => {
    expect(typeof functionSignOut).toBe('function');
  });
});

// Test a functionDeleteTask
describe('myFunctionDeleteTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionDeleteTask).toBe('function');
  });
});

// Test a functionGetTask2
describe('myFunctionGetTask2', () => {
  it('debería ser una función', () => {
    expect(typeof functionGetTask2).toBe('function');
  });
});

// Test a functionUpdateTask
describe('myFunctionUpdateTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionUpdateTask).toBe('function');
  });
});
