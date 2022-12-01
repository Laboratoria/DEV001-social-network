export const register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido';

  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
