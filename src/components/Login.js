import {
  signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged,
} from 'firebase/auth';
import { provider, auth } from '../lib/Firebase.js';
import { signUp } from '../lib/Auth.js';

export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'contenedor';

  const textoLogin = document.createElement('h2');
  textoLogin.textContent = 'Ingresa usando tu cuenta de Semillero o una cuenta de Google';
  textoLogin.className = 'textoLogin';

  const loginMail = document.createElement('input');
  loginMail.placeholder = 'ingresa tu correo';
  loginMail.type = 'email';

  const loginPass = document.createElement('input');
  loginPass.placeholder = 'ingresa tu contraseña';
  loginPass.type = 'password';

  const errorLogin = document.createElement('p');
  errorLogin.id = 'errorLogin';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'INICIAR SESIÓN';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'VOLVER AL INICIO';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'INICIAR CON GOOGLE';

  const registerLink = document.createElement('h4');
  registerLink.textContent = '¡no tengo una cuenta!';
  registerLink.id = 'registerLink';
  registerLink.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', async () => {
    // const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      onNavigate('/wall');
    } catch (error) {
      console.log(error);
    }
  });

  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  // const signUp = (userMail, userPass) => {
  //   signInWithEmailAndPassword(auth, userMail, userPass)
  //     .then((userCredential) => {
  //     // Signed in
  //       // const user = userCredential.user;
  //       onAuthStateChanged(auth, (usuario) => {
  //         if (usuario) {
  //           onNavigate('/wall');
  //           const uid = usuario.uid;
  //         } else {
  //           onNavigate('/login');
  //         }
  //       });

  //     // ...
  //     })
  //     .catch((error) => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         document.getElementById('errorLogin').innerHTML = 'Este correo ya está registrado';
  //       } else if (error.code === 'auth/invalid-email') {
  //         document.getElementById('errorLogin').innerHTML = 'El correo que ingresaste es inválido';
  //       } else if (error.code === 'auth/weak-password') {
  //         document.getElementById('errorLogin').innerHTML = 'Tu clave tiene que tener un mínimo de seis dígitos';
  //       } else if (error.code) {
  //         document.getElementById('errorLogin').innerHTML = 'Revisa los datos ingresados, algo no está bien';
  //       }
  //     });
  // };

  buttonLogin.addEventListener('click', () => { // aquí comienza la función que tenemos que sacar y nombrar para luego test
    const userMail = loginMail.value;
    const userPass = loginPass.value;
    signUp(userMail, userPass);
    // const auth = getAuth();
  });
  loginDiv.append(textoLogin, loginMail, loginPass, errorLogin, buttonLogin, buttonGoogle, buttonHome, registerLink);
  return loginDiv;
};
