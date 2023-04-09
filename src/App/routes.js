// para cambiar la URL
export function goTo(pathname) {
  //aqui se cambía la URL sin refrescar la página
  history.pushState({}, '', pathname);
  // notifica el evento para que cambie el componente asociado a la ruta
  location.hash = `#${pathname}`;
}

/*
  if (routes[path] === undefined) {
    path = '/home';
    history.pushState({}, '', path);
  }
  */
