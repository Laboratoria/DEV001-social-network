export const Error = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'bienvenida';
  const textoBienvenida = document.createElement('h1');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Home';
  buttonLogin.className = 'btn_inicio';
  buttonLogin.addEventListener('click', () => onNavigate('/'));
  textoBienvenida.textContent = 'Lo sentimos ha ocurrido un error';
  textoBienvenida.classList = 'texto_bienvenida';
  HomeDiv.appendChild(textoBienvenida);
  HomeDiv.appendChild(buttonLogin);
  return HomeDiv;
};
