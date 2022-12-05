import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  homeDiv.append(textoLogin, loginMail, loginPass, buttonLogin, buttonHome);
  return homeDiv;
};
