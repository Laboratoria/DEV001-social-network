// importamos la funcion que vamos a testear
//import { auth } from '../src/lib/Archivos JS/firebase.js';//
import { functionRegister } from '../src/lib/Archivos JS/index.js';

describe('myFunctionRegister', () => {
  it('debería ser una función', () => {
    expect(typeof functionRegister).toBe('function');
  });
  it('debería retornar un objeto con la propiedad email', () => {
    return functionRegister("ruth.pz@gmail.com", "1234ruth", "Gaby").then((user)=> {
      expect(user.email).toBe("ruth.pz@gmail.com");
    });
  });
  it('debería retornar un error', () => {
    return functionRegister("ruth.pz@gmail", "1234ruth", "Gaby").then((user)=> {
      expect("error").toBe("error");
    });
  });
});
