import { onNavigate } from '../../main';

// export const register = () => {
//   const homeDiv = document.createElement('div');
//   homeDiv.textContent('Bienvenida al registro');
//   const buttonHome = document.createElement('button');
//   buttonHome.textContent = 'Regresar';

//   buttonHome.addEventListener('click', () => onNavigate('/'));

//   homeDiv.appendChild(buttonHome);

//   return homeDiv;
// };

export const register = () => {
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  homeDiv.textContent = 'Regístrate';
  buttonHome.textContent = 'Regresar';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);


  const homeDiv2 = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = 'Nombre completo';
  const inputName = document.createElement('input');
  inputName.type = "text"
  inputName.id = "inputName"
  inputName.placeholder= 'INGRESA TU NOMBRE'

  homeDiv2.appendChild(p);
  homeDiv2.appendChild(inputName);
  homeDiv.appendChild(homeDiv2);

  const homeDiv3 = document.createElement('div');
  const p2 = document.createElement('p');
  p2.textContent = 'Correo electrónico';
  const inputEmail = document.createElement('input');
  inputEmail.type = "email"
  inputEmail.id = "inputEmail"
  inputEmail.placeholder= 'INGRESA TU EMAIL'

  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(inputEmail);
  homeDiv.appendChild(homeDiv3);

  const homeDiv4 = document.createElement('div');
  const p3 = document.createElement('p');
  p3.textContent = 'Contraseña';
  const inputPassword = document.createElement('input');
  inputPassword.type = "password"
  inputName.id = "inputPassword"
  inputPassword.placeholder= 'INGRESA TU CONTRASEÑA'

  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(inputPassword);
  homeDiv.appendChild(homeDiv4);

  const homeDiv5 = document.createElement('div');
  const buttonSend = document.createElement('button');
  buttonSend.id = "sendRegister"

  buttonSend.textContent = 'Registrarme';

  buttonSend.addEventListener('click', () => {
    const name = buttonSend['inputName'].value
    const email = buttonSend['inputEmail'].value
    const password = buttonSend['inputPassword'].value

    console.log(name, email, password);
  });

  homeDiv5.appendChild(buttonSend);
  homeDiv.appendChild(homeDiv5);

  // const signupForm = document.querySelector('#sendRegister')

  // signupForm.addEventListener('submit', (e) => {
  //   e.preventDefault()
  //   const name = buttonSend['inputName'].value
  //   const email = buttonSend['inputEmail'].value
  //   const password = buttonSend['inputPassword'].value

  //   console.log(name, email, password);
  // }) ;
  
  // // function enviar() {
  // //   const name = buttonSend['inputName'].value
  // //   const email = buttonSend['inputEmail'].value
  // //   const password = buttonSend['inputPassword'].value

  // //   console.log(name, email, password);
  // // };

  return homeDiv;

};
