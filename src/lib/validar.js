// eslint-disable-next-line consistent-return
export const validar = (email, password) => {
  let entrar = true;
  // let mensaje = '';
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  console.log(password.length);
  console.log(email, password);
  console.log(regexEmail.test(email));

  if (!regexEmail.test(email)) {
    entrar = false;
    alert('El email no es válido');
  }

  //   // console.log(password.length);
  // if (password.length < 6) {
  //   // eslint-disable-next-line no-unused-vars
  //   mensaje += 'La constraseña no es válida';
  //   // eslint-disable-next-line no-unused-vars
  //   entrar = true;
  // }
  // if (entrar) {
  //   alert(mensaje);
  // } else {
  //   entrar false;
  // }
  return entrar;
};
