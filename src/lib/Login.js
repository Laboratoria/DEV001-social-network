import { loginUsuario } from "../Firebase";
import { registroGoogle } from "../Firebase";

export const Login = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'contenedorLogin';

    //CUADRO TRANSPARENTE
    const cuadroDiv = document.createElement('div');
    cuadroDiv.className = 'cuadroTransparente';
    HomeDiv.appendChild(cuadroDiv);

    //LOGO
    const logoHome = document.createElement('img');
    logoHome.src = '../Imagenes/Logo.png';
    logoHome.className = 'logoHome';
    cuadroDiv.appendChild(logoHome);

    //Frase Bajada
    const frase = document.createElement('p');
    frase.className = 'frase';
    frase.textContent = 'Tu red social especializada en Manga'
    cuadroDiv.appendChild(frase);

    //Inicia sesión título
    const frase2 = document.createElement('p');
    frase2.className = 'frase2';
    frase2.textContent = 'Inicia sesión'
    cuadroDiv.appendChild(frase2);


    //INPUT EMAIL
    const inputEmail = document.createElement('input'); // .placeholder = 'Email';
    inputEmail.className = 'correo';
    inputEmail.placeholder = 'Email';
    inputEmail.type = 'email';
    cuadroDiv.appendChild(inputEmail);


    //INPUT PASSWORD
    const inputpassword = document.createElement('input');
    inputpassword.className = 'password';
    inputpassword.placeholder = 'Contraseña';
    inputpassword.type = 'password';
    cuadroDiv.appendChild(inputpassword);

    //BOTÓN INICIO SESIÓN
    const buttonInicioSesion = document.createElement('button');
    buttonInicioSesion.textContent = 'Iniciar Sesión';
    buttonInicioSesion.className = 'botoniniciosesion';
    cuadroDiv.appendChild(buttonInicioSesion);

    //BOTON VOLVER AL INCIO
    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Regresar al inicio';
    buttonHome.className = 'salida';
    cuadroDiv.appendChild(buttonHome);
    buttonHome.addEventListener('click', () => onNavigate('/'));

    buttonInicioSesion.addEventListener('click', (e) => {
        e.preventDefault()

        let email = document.getElementsByClassName('correo')[0].value;
        let contraseña = document.getElementsByClassName('password')[0].value;


        loginUsuario(email, contraseña).then((exito) => {
            console.log(exito);
            onNavigate('/wall');


            // ...
        }).catch((error) => {
            console.log(error);
            const loginError = document.createElement('p');
            loginError.className = 'error';
            loginError.textContent = 'Algo ha salido mal, inténtelo de nuevo';
            cuadroDiv.appendChild(loginError);


            // ...
        });



    })

    //REGISTRO CON GOOGLE
    const buttonGoogle = document.createElement('button');
    buttonGoogle.textContent = 'Conéctate con Google';
    buttonGoogle.className = 'botongoogle';
    cuadroDiv.appendChild(buttonGoogle);

    buttonGoogle.addEventListener('click', (e) => {
        e.preventDefault()

        registroGoogle().then((exito) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;

            // const user = result.user;
            console.log(exito);
            onNavigate('/wall');


        }).catch((error) => {
            console.log(error);
        })
    })



    // //FONDO
    // const fondoHome = document.createElement('img');
    // fondoHome.src = '../Imagenes/Login.jpg';
    // fondoHome.className = 'fondoHome';
    // HomeDiv.appendChild(fondoHome);


    return HomeDiv;
};






// Falta el evento en el login
// Al momento de pulsar el botón regresar al inicio llevarme al home***********