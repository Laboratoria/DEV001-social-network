export const Home = () => {
  const homeDiv = document.createElement('div');
  const buttonLogIn = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogIn.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Regístrate';

  homeDiv.appendChild(buttonRegister, buttonLogIn);
  return homeDiv;
};