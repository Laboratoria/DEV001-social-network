export const home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonRegistro = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegistro.textContent = 'Regístrate';
  buttonLogin.textContent = 'Inicia Sesión';

  buttonRegistro.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegistro);
  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
