export const Wall = (onNavigate) => {
  const wallDiv = document.createElement('div');

  const textoWall = document.createElement('h2');
  textoWall.textContent = 'estamos en el muro';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  wallDiv.append(textoWall);
  return wallDiv;
};
