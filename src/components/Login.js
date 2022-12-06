import { getAuth, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import { provider } from '../lib/index.js';

export const Login = (onNavigate) => {
  const homeDiv = document.createElement('div');

  const textoLogin = document.createElement('h2');
  textoLogin.textContent = 'estamos en login';

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

  buttonGoogle.addEventListener('click', () => {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
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
        const user = userCredential.user;
        console.log(user);
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

  homeDiv.append(textoLogin, loginMail, loginPass, buttonLogin, buttonHome, buttonGoogle);
  return homeDiv;
};
