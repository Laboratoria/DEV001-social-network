import { loginUsuario } from "../Firebase";
import { registroGoogle } from "../Firebase";

export const Login = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'contenedorLogin';



    //LOGO
    const logoHome = document.createElement('img');
    logoHome.src = '../Imagenes/Logo.png';
    logoHome.className = 'logoHome';
    HomeDiv.appendChild(logoHome);

    //Frase Bajada
    const frase = document.createElement('p');
    frase.className = 'frase';
    frase.textContent = 'Tu red social especializada en Manga'
    HomeDiv.appendChild(frase);

    //Inicia sesión título
    const frase2 = document.createElement('p');
    frase2.className = 'frase2';
    frase2.textContent = 'Inicia sesión'
    HomeDiv.appendChild(frase2);


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
    buttonInicioSesion.textContent = 'Iniciar Sesión';
    buttonInicioSesion.className = 'botoniniciosesion';
    HomeDiv.appendChild(buttonInicioSesion);

    //BOTON VOLVER AL INCIO
    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Regresar al inicio';
    buttonHome.className = 'salida';
    HomeDiv.appendChild(buttonHome);
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
            HomeDiv.appendChild(loginError);


            // ...
        });



    })

    //REGISTRO CON GOOGLE
    const buttonGoogle = document.createElement('button');
    buttonGoogle.textContent = 'Conéctate con Google';
    buttonGoogle.className = 'botongoogle';
    HomeDiv.appendChild(buttonGoogle);

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

    //CUADRO TRANSPARENTE
    const cuadroDiv = document.createElement('div');
    cuadroDiv.className = 'cuadroTransparente';
    HomeDiv.appendChild(cuadroDiv);

    // //FONDO
    // const fondoHome = document.createElement('img');
    // fondoHome.src = '../Imagenes/Login.jpg';
    // fondoHome.className = 'fondoHome';
    // HomeDiv.appendChild(fondoHome);


    return HomeDiv;
};






// Falta el evento en el login
// Al momento de pulsar el botón regresar al inicio llevarme al home***********