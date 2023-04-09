// importamos la funcion que vamos a testear
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { loginWithGoogle } from '../src/App/auth';

import {
  eventoLogin, logWithGoogle,
} from '../src/componentes/Home';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

// TEST FUNCIÓN EVENTO LOGIN
document.body.innerHTML = `<button id="buttonLogin"></button>
<input id="Email"></input>
<input id="Password"></input>
<button id="buttonGoogle"></button>
`;
describe('eventoLogin Test ', () => {
  it('deberia llamar correctamente signInWithEmailAndPassword', () => {
    eventoLogin();
    document.getElementById('buttonLogin').click();
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

// TEST FUNCIÓN LOGIN CON GOOGLE
const auth = jest.fn();
const provider = jest.fn();
describe('logWithGoogle Test', () => {
  it('debería ser  una función', () => {
    expect(typeof logWithGoogle).toBe('function');
  });
});
it('debería ejecutar la función signInWithPopup', async () => {
  const goTo = jest.fn();
  await signInWithPopup(auth, provider);
  expect(signInWithPopup).toHaveBeenCalled();
});

//TEST FUNCIÓN ON CLICK PUBLICAR


