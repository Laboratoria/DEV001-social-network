import {
  getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, GoogleAuthProvider,
} from 'firebase/auth';
import { provider, auth } from '../lib/index.js';

export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'contenedor';

  const textoLogin = document.createElement('h2');
  textoLogin.textContent = 'Si ya creaste tu cuenta, o tienes una de Google, puedes ingresar a Semillero';
  textoLogin.className = 'textoLogin';

  const loginMail = document.createElement('input');
  loginMail.placeholder = 'ingresa tu correo';
  loginMail.type = 'email';

  const loginPass = document.createElement('input');
  loginPass.placeholder = 'ingresa tu contraseña';
  loginPass.type = 'password';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'iniciar sesión';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'inicia sesion con Google';

  buttonGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
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

  buttonLogin.addEventListener('click', () => {
    const userMail = loginMail.value;
    const userPass = loginPass.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
      // Signed in
        const usuario = userCredential.user;
        onAuthStateChanged(auth, (usuario) => {
          if (usuario) {
            onNavigate('/wall');
            const uid = usuario.uid;
          } else {
            alert('no');
          }
        });

      // ...
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Este correo ya está registrado', 'error');
        } else if (error.code === 'auth/invalid-email') {
          alert('El correo que ingresaste es inválido');
        } else if (error.code === 'auth/weak-password') {
          alert('Tu clave tiene que tener un mínimo de seis dígitos');
        } else if (error.code) {
          alert('Revisa los datos ingresados, algo no está bien');
        }
      });
  });

  loginDiv.append(textoLogin, loginMail, loginPass, buttonLogin, buttonHome, buttonGoogle);
  return loginDiv;
};
