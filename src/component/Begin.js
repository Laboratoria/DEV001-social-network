export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'bienvenida';
  const textoBienvenida = document.createElement('h1');
  textoBienvenida.textContent = 'Bienvenidos a la Pagina';
  textoBienvenida.classList = 'texto_bienvenida';
  const regresarHome = document.createElement('button');
  regresarHome.textContent = 'HOME';
  regresarHome.classList = 'btn_regresar';
  regresarHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(textoBienvenida);
  HomeDiv.appendChild(regresarHome);
  return HomeDiv;
};
