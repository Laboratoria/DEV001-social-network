export const Register = (rootDiv) => {
  const template1 = `<div class="containerFormR">
  <img class="logoR" src="images/logo2.jpeg">
  <div id="FormReg">
    <p class="textoR">Ingresa tus datos</p>
    <input type="text" class="inputR" id="name" placeholder="Nombre" required>
    <input type="text" class="inputR" id="subname" placeholder="Apellido" required>
    <input type="text" class="inputR" id="age" placeholder="Edad" required>
    <input type="text" class="inputR" id="loginEmail" placeholder="Correo Electrónico" required>
   <input type="password" class="inputR" id="loginPassword" placeholder=" Contraseña" required>
   <button class="btnRegister " id="buttonRegistrar" type="submit" > Registrarme </button>
   <a  id="a" href = '/' class="volver" >Volver al Inicio</a></p>
  </div>
</div>`;
  rootDiv.innerHTML = template1;
};
