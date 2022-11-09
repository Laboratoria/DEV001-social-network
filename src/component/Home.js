export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const divLogo = document.createElement('div');
  divLogo.className = 'logo';
  HomeDiv.appendChild(divLogo);
  const letraLogo = document.createElement('h1');
  letraLogo.className = 'letraLogo';
  letraLogo.textContent = 'Lymusic';
  divLogo.appendChild(letraLogo);
  const divBotones = document.createElement('div');
  divBotones.className = 'divBotones';
  buttonRegister.textContent = 'Register';
  buttonRegister.className = 'botonregistro';
  buttonLogin.textContent = 'Sign in';
  buttonLogin.className = 'botoniniciosesion';
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  divBotones.appendChild(buttonRegister);
  divBotones.appendChild(buttonLogin);
  HomeDiv.appendChild(divBotones);
  return HomeDiv;
};
