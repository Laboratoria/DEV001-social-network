import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/index.js';

export const Register = (onNavigate) => {
  const homeDiv = document.createElement('div');

  const textoRegister = document.createElement('h2');
  textoRegister.textContent = 'estamos en register';

  const registerMail = document.createElement('input');
  registerMail.placeholder = 'ingresa tu correo';
  registerMail.type = 'email';

  const registerPass = document.createElement('input');
  registerPass.placeholder = 'ingresa tu contraseña';
  registerPass.type = 'password';

  const buttonSend = document.createElement('button');
  buttonSend.textContent = 'crear usuario';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonSend.addEventListener('click', () => {
    const userMail = registerMail.value;
    const userPass = registerPass.value;
    createUserWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });

  homeDiv.append(textoRegister, registerMail, registerPass, buttonSend, buttonHome);
  return homeDiv;
};
