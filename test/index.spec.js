/* eslint-disable max-len */
import {
  createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import {
  collection, addDoc, deleteDoc, onSnapshot, getDoc, updateDoc, getDocs, orderBy, query,
} from 'firebase/firestore';
import {
  functionSignUp, functionSignIn, functionUserGoogle, functionSignOut, saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask,
} from '../src/lib/index.js';

import { db } from '../src/lib/firebase.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../src/lib/firebase.js');

/* -----Test para functionSignUp -----*/

describe('functionSignUp', () => {
  it('Debería ser una función', () => {
    expect(typeof functionSignUp).toBe('function');
  });

  it('Debería retornar un objeto con la propiedad email', () => {
    functionSignUp('barbarita@gmail.com', '98barb');
    expect({
      email: 'barbarita@gmail.com',
      password: '98barb',
    }).toEqual(expect.anything());
  });

  it('Debería ejecutar createUserWithEmailAndPassword()', () => {
    const email = 'barbarita@gmail.com';
    const password = '98barb';

    functionSignUp(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Debería mostrar el error "This email is already in use"', () => {
    createUserWithEmailAndPassword.mockRejectedValue(new Error('This email is already in use'));
    functionSignUp('cris@gmail.com', 'asdfgh').catch((error) => {
      expect(error.message).toBe('This email is already in use');
    });
  });

  it('Debería mostrar el error "Invalid email"', () => {
    createUserWithEmailAndPassword.mockRejectedValue(new Error('Invalid email'));
    functionSignUp('barbarita@gmail', '98barb').catch((error) => {
      expect(error.message).toBe('Invalid email');
    });
  });

  it('Debería mostrar el error "the password must have at least six characters"', () => {
    createUserWithEmailAndPassword.mockRejectedValue(new Error('the password must have at least six characters'));
    functionSignUp('barbarita@gmail.com', 'barb').catch((error) => {
      expect(error.message).toBe('the password must have at least six characters');
    });
  });
});

/* -----Test para functionSignIn -----*/

describe('functionSignIn', () => {
  it('Debería ser una función', () => {
    expect(typeof functionSignIn).toBe('function');
  });

  it('Debería ejecutar signInWithEmailAndPassword()', () => {
    const email = 'barbarita@gmail.com';
    const password = '98barb';

    functionSignIn(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Debería retornar un objeto con la propiedad email', () => {
    functionSignIn('barbarita@gmail.com', '98barb');
    expect({
      email: 'barbarita@gmail.com',
      password: '98barb',
    }).toEqual(expect.anything());
  });

  it('Debería mostrar error en el sign in', () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error('error'));
    functionSignIn('barbarita@gmail.com', '98bar').catch((error) => {
      expect(error.message).toBe('error');
    });
  });
});

/* -----Test para functionUserGoogle -----*/

describe('functionUserGoogle', () => {
  it('Debería ser una función', () => {
    expect(typeof functionUserGoogle).toBe('function');
  });

  it('Ejecuta sigInWithPopup()', () => {
    functionUserGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });

  it('Debería mostrar el error en el sign in with Google', () => {
    signInWithPopup.mockRejectedValue(new Error('error'));
    functionUserGoogle('barbarita@gmail.com', '98barb').catch((error) => {
      expect(error.message).toBe('error');
    });
  });
});

/* -----Test para functionSignOut -----*/

describe('functionSignOut', () => {
  it('Debería ser una función', () => {
    expect(typeof functionSignOut).toBe('function');
  });
  it('Deberia llamar correctamente signOut', () => {
    functionSignOut(signOut);
    expect(signOut).toBeCalled();
  });
});

/* -----Test para saveTask -----*/
describe('saveTask', () => {
  it('Debería ser una función', () => {
    expect(typeof saveTask).toBe('function');
  });

  it('Debería llamar addDoc()', () => {
    addDoc(collection(db, 'post'), {
      content: 'Hola mundo',
      date: '05/01/2023, 21:02:23',
      uid: '8ZBWwH0jfDPKeXIlU8u33J4VIOf1',
      userName: 'Christian Ramirez',
    });
    expect(addDoc).toHaveBeenCalled();
  });
});

// Test a collection
describe('collection', () => {
  it('Debería ser una función', () => {
    expect(typeof collection).toBe('function');
  });
});

/* -----Test para getTask -----*/
describe('getTask', () => {
  it('Debería ser una función', () => {
    expect(typeof getTask).toBe('function');
  });
  it('Deberia llamar getDoc', () => {
    getTask(getDoc);
    expect(getDoc).toBeCalled();
  });
});

/* -----Test para getTasks -----*/
describe('getTasks', () => {
  it('Debería ser una función', () => {
    expect(typeof getTasks).toBe('function');
  });
  it('Deberia llamar getDoc', () => {
    getTasks(getDocs);
    expect(getDocs).toBeCalled();
  });
});

/* -----Test para onGetTasks -----*/
describe('onGetTasks', () => {
  it('Debería ser una función', () => {
    expect(typeof onGetTasks).toBe('function');
  });
  it('Debería llamar a query y order by', () => {
    query(collection(db, 'texto'), orderBy('date', 'desc'));
    expect(query).toHaveBeenCalled();
    expect(orderBy).toHaveBeenCalled();
    expect(collection).toHaveBeenCalled();
  });

  it('Deberia llamar onSnapshot', () => {
    onGetTasks(onSnapshot);
    expect(onSnapshot).toBeCalled();
  });
});

/* -----Test para deleteTasks -----*/
describe('deleteTask', () => {
  it('Debería ser una función', () => {
    expect(typeof deleteTask).toBe('function');
  });
  it('Deberia llamar deleteTask', () => {
    deleteTask(deleteDoc);
    expect(deleteDoc).toBeCalled();
  });
});

/* -----Test para updateTask -----*/
describe('updateTask', () => {
  it('Debería ser una función', () => {
    expect(typeof updateTask).toBe('function');
  });
  it('Deberia llamar updateDoc', () => {
    updateTask(updateDoc);
    expect(updateDoc).toBeCalled();
  });
});
