import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/index.js';

export const Register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'contenedor';

  const textoRegister = document.createElement('h2');
  textoRegister.textContent = '¡Te damos la bienvenida! crea aquí tu cuenta para comenzar a intercambiar tus semillas';

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

  homeDiv.append(textoRegister, registerMail, registerPass, buttonSend, buttonHome);
  return homeDiv;
};
