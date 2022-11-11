import { modalMensaje } from './modal.js';

export const validar = (email, password) => {
  let entrar = true;
  let mensaje = '';
  let mensaje2 = '';
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  console.log(password.length);
  console.log(email, password);
  console.log(regexEmail.test(email));

  if (!regexEmail.test(email)) {
    entrar = false;
    mensaje += 'El email no es válido';
  }
  console.log(password.length);
  if (password.length < 6) {
    mensaje2 += 'La constraseña no es válida';
    entrar = false;
  }
  if (!entrar) {
    modalMensaje(mensaje, mensaje2);
    // mensaje += 'Todo correcto';
    // alert(mensaje);
    // console.log(`dentro del if${entrar}`);
  }
  return entrar;
};
