export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.innerHTML = `
  <article class = "plantilla">
   <div><img class="logo" src="img/logo.png" alt=""></div>
   <div><img class="niña" src="img/una.png" alt=""></div>
   <div>
    <input type = "text" class= "usuario" placeholder = "Usuario o correo electrónico">
    <input type = "text" class= "usuario" placeholder = "Contraseña">
  </div>
  </article>
 `;

  const buttonLogin = document.createElement('button');

  buttonLogin.textContent = 'Iniciar sesión';

  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
console.log(Home());