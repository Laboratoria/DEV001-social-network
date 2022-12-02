export const login = (onNavigate) => {
  const templateFormulario = `
    <div class= "container">
    <div class="logo">
    <img src= "https://image.shutterstock.com/image-vector/illustration-woman-taking-walk-through-260nw-1799131150.jpg" class="imagen-logo" >
    </div>
        <div class= "btnIniciarSesion">
            <input class="btn1" type= "button" value="Inicia Sesión">
        </div>
        <div class= "btnregistrate">
            <input type= "button" class="btn2" value="Regístrate">
        </div>
      </div>`;
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Login';

  HomeDiv.innerHTML = templateFormulario;

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
