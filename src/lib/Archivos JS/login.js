export const login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent('Bienvenida al inicio de sesión');
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Inicio';

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
