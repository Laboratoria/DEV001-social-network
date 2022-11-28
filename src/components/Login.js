import { onNavigate } from '../main.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Iniciar Sesión';
  buttonRegister.textContent = 'Registrarse';
  title.textContent = 'Estamos en Login';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  loginDiv.append(title, buttonLogin, buttonRegister);

  return loginDiv;
};
