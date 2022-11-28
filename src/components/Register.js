export const Register = () => {
  const registerDiv = document.createElement('div');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  button.textContent = 'Crear cuenta';
  buttonBack.textContent = 'Regresa';
  title.textContent = 'Registro de nueva cuenta';

  // button.addEventListener('click', () => {
  //   onNavigate('/login');
  // });
  // buttonBack.addEventListener('click', () => {
  //   onNavigate('/');
  // });

  registerDiv.append(title, inputEmail, inputPass, button, buttonBack);

  return registerDiv;
};
