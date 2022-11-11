import { modalMensaje } from './modal.js';

export const validar = (email, password) => {
  let entrar = true;
  let mensaje = '';
  let mensaje2 = '';
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

  if (!regexEmail.test(email)) {
    entrar = false;
    mensaje += 'El email no es válido';
  }

  if (password.length < 6) {
    mensaje2 += 'La constraseña no es válida';
    entrar = false;
  }
  if (entrar) {
    mensaje += 'Todo correcto';
    alert(mensaje);
    console.log(`dentro del if${entrar}`);
  } else {
    modalMensaje(mensaje, mensaje2);
    console.log(`dentro del else${entrar}`);
  }
  return entrar;
};
