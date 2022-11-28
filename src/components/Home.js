export const Home = () => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Iniciar Sesión';
  buttonRegister.textContent = 'Registrarse';
  title.textContent = 'Te damos la bienvenida a Semillero';

  buttonLogin.addEventListener('click', () => {
    HashChangeEvent('/login');
  });

  buttonRegister.addEventListener('click', () => {
    HashChangeEvent('/register');
  });

  homeDiv.append(title, buttonLogin, buttonRegister);

  return homeDiv;
};
