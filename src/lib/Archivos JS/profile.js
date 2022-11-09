import { onNavigate } from '../../main';
import { signOut } from "firebase/auth";
import { auth } from './firebase.js'
import { async } from 'regenerator-runtime';

const rootDiv = document.getElementById('root');

export const profile = () => {
  rootDiv.innerHTML = " ";

  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Mi perfil';

  const homeDiv2 = document.createElement('div');
  const imgProfile = document.createElement('img');
  imgProfile.src = "./lib/img/Ellipse 9.png";
  const p = document.createElement('p');
  p.textContent = 'Usuario';
  const btnCerrar = document.createElement('button');
  btnCerrar.textContent = 'Cerrar sesión'

  btnCerrar.addEventListener("click", async () => {
    await signOut(auth)
    console.log('user signed out')
    onNavigate("/")
    });

  homeDiv2.appendChild(imgProfile);
  homeDiv2.appendChild(p);
  homeDiv2.appendChild(btnCerrar);
  homeDiv.appendChild(homeDiv2);

  return homeDiv;
};