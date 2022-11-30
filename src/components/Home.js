export const Home = (onNavigate) => {
  const div = document.createElement('div');
  const textoAlto = document.createElement('h1');
  textoAlto.textContent = 'Te damos la bienvenida a Semillero';

  const textoBajo = document.createElement('h2');
  textoBajo.textContent = 'aquí pondremos una descripción de la app';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia Sesión';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(textoAlto, textoBajo, buttonLogin, buttonRegister);

  return div;
};
