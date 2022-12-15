export const Home = (onNavigate) => {
  const div = document.createElement('div');
  div.className = 'contenedor';

  const textoAlto = document.createElement('h1');
  textoAlto.textContent = 'Te damos la bienvenida a Semillero';

  const textoBajo = document.createElement('h2');
  textoBajo.textContent = 'Semillero es una red social de intercambio de semillas tradicionales a nivel local.¡Te invitamos a unirte!';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'INICIAR SESIÓN';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'REGÍSTRATE';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(textoAlto, textoBajo, buttonLogin, buttonRegister);
  return div;
};
