export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent('Bienvenida al registro');
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar';

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
