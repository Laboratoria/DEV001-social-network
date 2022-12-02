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

  homeDiv.append(textoLogin, loginMail, loginPass, buttonLogin, buttonHome);
  return homeDiv;
};
