import { onNavigate } from '../../main';
import { signOut } from "firebase/auth";
import { auth } from './firebase.js'
import { async } from 'regenerator-runtime';

const rootDiv = document.getElementById('root');

export const profile = () => {
  rootDiv.innerHTML = " ";

  const homeDiv = document.createElement('div');
  const homeDiv2 = document.createElement('div');
  const imgProfile = document.createElement('img');
  const p = document.createElement('p');
  const btnCerrar = document.createElement('button');

  homeDiv.textContent = 'Mi perfil';
  imgProfile.src = "./lib/img/Ellipse 9.png";
  p.textContent = 'Usuario';
  btnCerrar.textContent = 'Cerrar sesión'

  homeDiv2.appendChild(imgProfile);
  homeDiv2.appendChild(p);
  homeDiv2.appendChild(btnCerrar);
  homeDiv.appendChild(homeDiv2);

  btnCerrar.addEventListener("click", async () => {
    await signOut(auth)
    console.log('user signed out')
    onNavigate("/")
    });

  return homeDiv;
};