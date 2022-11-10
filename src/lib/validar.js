import { formularioregistro } from './index.js';

export const validar = (name, email, password) => {
  // aqui se valida el formulario
  formularioregistro(name, email, password);
  //console.log('validar' + name, email, password);
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (name.length < 6) {
    alert('El nombre no es válido');
  }
  console.log(regexEmail.test(email))
  if (!regexEmail.test(email)) {
    alert('El email no es válido');
    entrar = true
  }
  if (password.length < 8) {
    alert('La constraseña no es válida');
    entrar = true
  }
  // if (entrar) {

  // }
};
