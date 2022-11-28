export const Register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'bienvenidos al registro';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  homeDiv.appendChild(buttonHome);
  return homeDiv;
};