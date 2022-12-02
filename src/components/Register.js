export const Register = (onNavigate) => {
  const homeDiv = document.createElement('div');

  const textoRegister = document.createElement('h2');
  textoRegister.textContent = 'estamos en register';

  const registerMail = document.createElement('input');
  registerMail.placeholder = 'ingresa tu correo';
  registerMail.type = 'email';

  const registerPass = document.createElement('input');
  registerPass.placeholder = 'ingresa tu contraseña';
  registerPass.type = 'password';

  const buttonSend = document.createElement('button');
  buttonSend.textContent = 'crear usuario';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  homeDiv.append(textoRegister, registerMail, registerPass, buttonSend, buttonHome);
  return homeDiv;
};
