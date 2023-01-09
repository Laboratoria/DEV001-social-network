// importamos la funcion que vamos a testear
import { eventoLogin } from '../src/componentes/Home';
import { myFunction } from '../src/lib/index';

describe('eventoLogin Test ', () => {
  it('Es una función', () => {
    expect(typeof eventoLogin).toBe('function');
  });
  it('deberia llamar correctamente signInWithEmailAndPassword', () => {
    signInWithEmailAndPassword.mockImplementationOnce((auth, email, password) => {
      expect(email).toBe('test@test.test');
      expect(password).toBe('123');
      // await Promise.resolve()
      //   .then(() => {
      //     getUser();
      //     expect(getUser).toBeCalled();
      //   });
    });
});

export const login = (email, password, changeHashFn) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    goTo('/wall');
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        alert('Contraseña Incorrecta');
      } else if (error.code === AuthErrorCodes.USER_DELETED) {
        alert('Usuario Inválido');
      } else {
        alert('El E-mail o contraseña son incorrectos');
      }
    });
};



export const eventoLogin = (changeHashFn) => {
  const btnLogin = document.getElementById('buttonLogin');
  btnLogin.addEventListener('click', () => {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    login(email, password, changeHashFn);
  });
};
/* //TEST PARA FUNCIÓN DE TRAER LOS DATOS ESPECÍFICOS//
describe('resumeData Test', () => {
  it('Es una función', () => {
    expect(typeof resumeData).toBe('function');
  });
  it('Debe retornar about, img, name, num, type', () => {
    const exampleData = [{
      "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      "name": "bulbasaur",
      "num": "001",
      "type": [
        "normal"],
    }
    ]
    const expectResult = [
      {
        "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
        "name": "bulbasaur",
        "num": "001",
        "type": [
          "normal"],
      }
    ];
    const resumirDato = resumeData(exampleData, "https://www.serebii.net/pokemongo/pokemon/001.png", "001", "bulbasaur", "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.", "normal",)
    expect(resumirDato)===(expectResult);
  });
}) */
