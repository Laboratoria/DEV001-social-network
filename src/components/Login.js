export const Login = (onNavigate) => {
  const homeDiv = document.createElement('div');

  const textoLogin = document.createElement('h2');
  textoLogin.textContent = 'estamos en login';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  homeDiv.append(textoLogin, buttonHome);
  return homeDiv;
};
