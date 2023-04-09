export const NotFound = (rootDiv) => {
  const template = `<div class="notfound">
            <h2> ¡La ruta no existe! </h2>
            <a href= '/home'> Ir a Home </a>
          </div>`;
  rootDiv.innerHTML = template;
};
