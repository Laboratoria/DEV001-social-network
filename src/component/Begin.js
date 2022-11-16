export const Begin = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'bienvenida';

  const divBoton = document.createElement('div');
  divBoton.className = 'botonAtras';
  HomeDiv.appendChild(divBoton);
  const buttonHome3 = document.createElement('button');
  buttonHome3.textContent = '«';
  buttonHome3.classList = 'btn_atras';
  divBoton.appendChild(buttonHome3);
  buttonHome3.addEventListener('click', () => onNavigate('/login'));
  
  const textoBienvenida = document.createElement('h1');
  textoBienvenida.textContent = 'Bienvenidx a Lymusic';
  textoBienvenida.classList = 'texto_bienvenida';
  
  HomeDiv.appendChild(textoBienvenida);

  const form = document.createElement('form');
  const divForm = document.createElement('div');

  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  
  const opcion1 = document.createElement('p')
  opcion1.textContent = 'Novedades';
  divForm.appendChild(opcion1);
  opcion1.classList = 'novedades';
  const opcion2 = document.createElement('p')
  opcion2.textContent = 'Géneros musicales';
  divForm.appendChild(opcion2);
  opcion2.classList = 'genero';
  const opcion3 = document.createElement('p')
  opcion3.textContent = 'Play List Populares';
  divForm.appendChild(opcion3);
  opcion3.classList = 'populares';
  const opcion4 = document.createElement('p')
  opcion4.textContent = 'Artistas';
  divForm.appendChild(opcion4);
  opcion4.classList = 'artistas';

  divForm.className = 'cajas'
  
  const textoCuerpo = document.createElement('p');
  textoCuerpo.textContent = 'Desconéctate del mundo y conéctate con la música';
  textoCuerpo.classList = 'parrafo_publicacion';

  HomeDiv.appendChild(textoCuerpo);

  const regresarHome = document.createElement('img');
  //regresarHome.textContent = 'HOME';
  regresarHome.classList = 'btn_regresar';
  regresarHome.src = '../assets/img/casa.webp';
  regresarHome.alt = 'imagen casita';
  regresarHome.addEventListener('click', () => onNavigate('/'));
  


  HomeDiv.appendChild(regresarHome);


  return HomeDiv;
};
