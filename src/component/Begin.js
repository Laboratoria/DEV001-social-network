export const Begin = (mensaje) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'bienvenida';
  const textoBienvenida = document.createElement('h1');
  const textoUsuario = document.createElement('h2');
  textoBienvenida.textContent = 'Bienvenidos a la Pagina';
  textoBienvenida.classList = 'texto_bienvenida';
  textoUsuario.textContent = mensaje;
  HomeDiv.appendChild(textoBienvenida);
  HomeDiv.appendChild(textoUsuario);
  return HomeDiv;
};
