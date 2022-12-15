export const Login = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Inicia Sesión';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al inicio';
    buttonHome.addEventListener('click', () => onNavigate('/'));

    HomeDiv.appendChild(buttonHome);


    //INPUT EMAIL
    const inputEmail = document.createElement('input'); // .placeholder = 'Email';
    inputEmail.className = 'correo';
    inputEmail.placeholder = 'Email';
    inputEmail.type = 'email';
    HomeDiv.appendChild(inputEmail);


    //INPUT PASSWORD
    const inputpassword = document.createElement('input');
    inputpassword.className = 'password';
    inputpassword.placeholder = 'Contraseña';
    inputpassword.type = 'password';
    HomeDiv.appendChild(inputpassword);

    //BOTÓN INICIO SESIÓN
    const buttonInicioSesion = document.createElement('button');
    buttonInicioSesion.textContent = 'Inicia Sesión';
    buttonInicioSesion.className = 'botoninput';
    HomeDiv.appendChild(buttonInicioSesion);


    return HomeDiv;
};



// Falta el evento en el login
// Al momento de pulsar el botón regresar al inicio llevarme al home***********