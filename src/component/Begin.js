export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'bienvenida';
  const textoBienvenida = document.createElement('h1');
  textoBienvenida.textContent = 'Bienvenidos a la Pagina';
  textoBienvenida.classList = 'texto_bienvenida';
  const textoCuerpo = document.createElement('p');
  textoCuerpo.textContent = 'Hola!!! En esta App podrás compartir la canciones que te gusta, tus cantantes favoritos y comentar todo sobre música';
  textoCuerpo.classList = 'parrafo_publicacion';
  const regresarHome = document.createElement('button');
  regresarHome.textContent = 'HOME';
  regresarHome.classList = 'btn_regresar';
  regresarHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(textoBienvenida);
  HomeDiv.appendChild(textoCuerpo);
  HomeDiv.appendChild(regresarHome);

  return HomeDiv;
};
