/* eslint-disable import/first */
/* eslint-disable jest/no-identical-title */
// importamos la funcion que vamos a testear
// import { auth } from '../src/lib/Archivos JS/firebase.js';//
// import { async } from "regenerator-runtime";

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  getDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  collection,
  // db,
} from 'firebase/firestore';

import {
  functionRegister, functionLogin, functionRegisterGoogle, functionGetTask, functionOnGetTask,
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

  it('Ejecuta createUserWithEmailAndPassword()', () => {
    const email = 'marianita@gmail.com';
    const password = '123';

    functionRegister(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

it('debería retornar el error "La contraseña debe tener al menos 6 carácteres"', () => {
  createUserWithEmailAndPassword.mockRejectedValue(new Error('La contraseña debe tener al menos 6 carácteres'));
  functionRegister('valeriamurguia98@gmail.com', 'val').catch((error) => {
    expect(error.message).toBe('La contraseña debe tener al menos 6 carácteres');
  });
});
it('debería retornar el error "Debes ingresar un correo válido"', () => {
  createUserWithEmailAndPassword.mockRejectedValue(new Error('Debes ingresar un correo válido'));
  functionRegister('valeriamurguia98@gmail', 'vale234').catch((error) => {
    expect(error.message).toBe('Debes ingresar un correo válido');
  });
});

// Test a functionLogin
describe('myFunctionLogin', () => {
  it('debería ser una función', () => {
    expect(typeof functionLogin).toBe('function');
  });
  it('debería retornar un objeto con la propiedad email', () => functionLogin('valeriamurguia98@gmail.com', 'vale123').then((user) => {
    expect(user.email).toBe('valeriamurguia98@gmail.com');
  }));
  it('debería tomar el segundo parámetro como contraseña válida', async () => {
    await functionLogin('valeriamurguia98@gmail.com', 'valeria1234').then((user) => {
      expect(user.password).toBe('valeria1234');
    });
  });
  it('debería retornar el error de una promesa', () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error('error'));
    functionLogin('valeriamurguia98@gmail.com', 'valeria234').catch((error) => {
      expect(error.message).toBe('error');
    });
  });
});

// Test a functionRegisterGoogle
describe('myFun awaitctionRegisterGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof functionRegisterGoogle).toBe('function');
  });
  it('debería retornar el error de una promesa', () => {
    signInWithPopup.mockRejectedValue(new Error('error'));
    functionRegisterGoogle('valeriamurguia98@gmail.com', 'valeria234').catch((error) => {
      expect(error.message).toBe('error');
    });
  });
  it('debería retornar un string', () => functionRegisterGoogle().then((provider) => {
    expect(typeof provider).toBe('string');
  }));
});

// Test a functionSaveTask
describe('myFunctionSaveTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionSaveTask).toBe('function');
  });
  it('deberia llamar correctamente addDoc', () => {
    functionSaveTask(addDoc);
    expect(addDoc).toBeCalled();
  });
});

// Test a functionGetTask2
describe('myFunctionGetTask2', () => {
  it('debería ser una función', () => {
    expect(typeof functionGetTask2).toBe('function');
  });
  it('deberia llamar correctamente getDoc', () => {
    functionGetTask2(getDoc);
    expect(getDoc).toBeCalled();
  });
});

// Test a functionOnGetTask
describe('myFunctionOnGetTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionOnGetTask).toBe('function');
  });
  it('deberia llamar correctamente onSnapshot', () => {
    functionOnGetTask(onSnapshot);
    expect(onSnapshot).toBeCalled();
  });
});

// Test a collection
describe('collection', () => {
  it('debería ser una función', () => {
    expect(typeof collection).toBe('function');
  });
});

// Test a functionSignOut
describe('myFunctionSignOut', () => {
  it('debería ser una función', () => {
    expect(typeof functionSignOut).toBe('function');
  });
  it('deberia llamar correctamente signOut', () => {
    functionSignOut(signOut);
    expect(signOut).toBeCalled();
  });
});

// Test a functionDeleteTask
describe('myFunctionDeleteTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionDeleteTask).toBe('function');
  });
  it('deberia llamar correctamente deleteDoc', () => {
    functionDeleteTask(deleteDoc);
    expect(deleteDoc).toBeCalled();
  });
});

// Test a functionGetTask2
// describe('myFunctionGetTask2', () => {
//   it('debería ser una función', () => {
//     expect(typeof functionGetTask2).toBe('function');
//   });
// });

// Test a functionUpdateTask
describe('myFunctionUpdateTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionUpdateTask).toBe('function');
  });
  it('deberia llamar correctamente updateDoc', () => {
    functionUpdateTask(updateDoc);
    expect(updateDoc).toBeCalled();
  });
});

// Test a functionGetTask
describe('myFunctionGetTask', () => {
  it('debería ser una función', () => {
    expect(typeof functionGetTask).toBe('function');
  });
});
