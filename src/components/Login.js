export const Login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'bienvenidos al login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  homeDiv.appendChild(buttonHome);
  return homeDiv;
};