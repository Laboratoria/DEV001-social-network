// eslint-disable-next-line import/no-cycle
import { onNavigate } from "../../main";
import { functionRegister } from "./index.js";

const rootDiv = document.getElementById("root");

export const register = () => {
  rootDiv.innerHTML = " ";

  const homeDiv = document.createElement("div");
  const container = document.createElement("section");
  const containerRegister = document.createElement("div");
  const containerImg = document.createElement("section");
  const imgwelcome = document.createElement("img");
  const imgTop = document.createElement("img");
  const imgBottom = document.createElement("img");
  const title = document.createElement("h2");
  const titleImg = document.createElement("img");
  const homeDiv2 = document.createElement("div");
  const p = document.createElement("p");
  const inputName = document.createElement("input");
  const homeDiv3 = document.createElement("div");
  const p2 = document.createElement("p");
  const inputEmail = document.createElement("input");
  const homeDiv4 = document.createElement("div");
  const p3 = document.createElement("p");
  const inputPassword = document.createElement("input");
  const homeDiv5 = document.createElement("div");
  const buttonSend = document.createElement("button");
  const imgFlower = document.createElement("img");
  const imgFlower2 = document.createElement("img");
  const imgFlower3 = document.createElement("img");
  const regresar = document.createElement("p");
  homeDiv.className = "container";
  container.className = "container-im-and-register";
  containerImg.className = "container-img";
  titleImg.src = "./lib/img/flowers1.png";
  titleImg.className = "img-title";
  title.textContent = "Regístrate";
  title.className = "title-register";
  imgwelcome.src = "./lib/img/img-women.png";
  imgwelcome.className = "img-welcome";
  imgTop.src = "./lib/img/collage-3.png";
  imgTop.className = "img-top-2";
  imgBottom.src = "./lib/img/collage-5.png";
  imgBottom.className = "img-bottom-2";
  containerRegister.className = "container-register";
  p.textContent = "Nombre completo";
  p.className = "text-subtitle";
  inputName.type = "text";
  inputName.id = "inputName";
  inputName.className = "input-register";
  inputName.required = "true";
  inputName.placeholder = "Ingresa tu nombre:";
  p2.textContent = "Correo electrónico";
  p2.className = "text-subtitle";
  inputEmail.type = "email";
  inputEmail.id = "inputEmail";
  inputEmail.className = "input-register";
  inputEmail.required = "true";
  inputEmail.placeholder = "Ingresa tu email:";
  p3.textContent = "Contraseña";
  p3.className = "text-subtitle";
  inputPassword.type = "password";
  inputPassword.id = "inputPassword";
  inputPassword.className = "input-register";
  inputPassword.required = "true";
  inputPassword.placeholder = "Ingresa tu contraseña:";
  regresar.innerHTML = "¿Ya tienes cuenta? <a href> Iniciar sesión </a>";
  regresar.className = "link-login";
  buttonSend.textContent = "Registrarme";
  buttonSend.className = "buttonRegister";
  buttonSend.id = "buttonRegister";
  imgFlower.src = "./lib/img/flowers2.png";
  imgFlower.className = "icon-img-flower";
  imgFlower2.src = "./lib/img/flowers2.png";
  imgFlower2.className = "icon-img-flower";
  imgFlower3.src = "./lib/img/flowers2.png";
  imgFlower3.className = "icon-img-flower";
  homeDiv2.className = "container-div";
  homeDiv3.className = "container-div";
  homeDiv4.className = "container-div";
  homeDiv5.className = "container-div";

  homeDiv.appendChild(container);
  container.appendChild(containerImg);
  container.appendChild(containerRegister);
  homeDiv.appendChild(imgTop);
  homeDiv.appendChild(imgBottom);
  containerImg.appendChild(imgwelcome);
  containerRegister.appendChild(titleImg);
  containerRegister.appendChild(title);
  homeDiv2.appendChild(imgFlower2);
  homeDiv2.appendChild(p);
  homeDiv2.appendChild(inputName);
  containerRegister.appendChild(homeDiv2);
  homeDiv3.appendChild(imgFlower);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(inputEmail);
  containerRegister.appendChild(homeDiv3);
  homeDiv4.appendChild(imgFlower3);
  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(inputPassword);
  containerRegister.appendChild(homeDiv4);
  homeDiv5.appendChild(buttonSend);
  homeDiv5.appendChild(regresar);
  containerRegister.appendChild(homeDiv5);

  regresar.addEventListener("click", () => onNavigate("/login"));

  buttonSend.addEventListener("click", async () => {
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;


    const result = await functionRegister(email, password, name);
    console.log(result);
    if (result != "error") {
      onNavigate("/profile");
      /*if(result.photoURL == null){
          const avatar = ['./lib/img/avatar-1.png', './lib/img/avatar-2.png', './lib/img/avatar-3.png', './lib/img/avatar-4.png', './lib/img/avatar-5.png'];
          const selectedAvatar = avatar[Math.floor(Math.random() * avatar.length)];
          console.log(selectedAvatar)
          result.photoURL = selectedAvatar;
      };*/
    }

    

  /*buttonSend.addEventListener('click', async () => {
    const name = inputName.value;
    const email = inputEmail.value;
    const password = inputPassword.value;

    console.log(name, email, password);
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCredentials);

      onNavigate('/profile');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        alert('El correo ya está registrado');
      } else if (error.code === 'auth/invalid-email') {
        alert('Debes ingresar un correo válido');
      } else if (error.code === 'auth/weak-password') {
        alert('La contraseña debe tener al menos 6 carácteres');
      } else if (error.code) {
        alert('Algo está mal en tu registro');
      }
      // const errorCode = error.code;
      // const errorMessage = error.message;
    }
  });*/
});
  return homeDiv;

}