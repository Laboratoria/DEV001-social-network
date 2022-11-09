// eslint-disable-next-line no-shadow
export const respuesta = (respuesta) => {
  // eslint-disable-next-line spaced-comment
  //aqui se obtiene la respuesta del firebase
  if (respuesta) {
    alert(`si es  ${respuesta}`);
  } else {
    alert(`else ${respuesta}`);
  }
};
