// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { registrarUsuario } from "../Firebase";


export const Register = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'contenedorRegister';
    const buttonHome = document.createElement('button');
    buttonHome.className = 'salida1';

    buttonHome.textContent = 'Regresar al inicio';

    buttonHome.addEventListener('click', () => onNavigate('/'));
    HomeDiv.appendChild(buttonHome);

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
    frase2.textContent = 'Regístrate';
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



    //BOTÓN REGISTRARTE / BOTÓN INPUT
    const buttonRegistro = document.createElement('button');
    buttonRegistro.textContent = 'Registrarte';
    buttonRegistro.className = 'botonregistro';
    HomeDiv.appendChild(buttonRegistro);

    buttonRegistro.addEventListener('click', (e) => {
        e.preventDefault()

        let email = document.getElementsByClassName('correo')[0].value;
        let contraseña = document.getElementsByClassName('password')[0].value;

        registrarUsuario(email, contraseña).then((exito) => {
            // obtenerUsuario(user.email);
            console.log(exito);

            onNavigate('/wall');

        }).catch((error) => {
            console.log(error);
            const registerError = document.createElement('p');
            registerError.innerHTML = ''; //NO PUEDO LIMPIAR EL MENSAJE ANTES
            registerError.className = 'error';

            registerError.textContent = 'Algo ha salido mal, inténtelo de nuevo';

            HomeDiv.appendChild(registerError);


            // ...
        });
    })

    //CUADRO TRANSPARENTE
    const cuadroDivRegister = document.createElement('div');
    cuadroDivRegister.className = 'cuadroTransparente2';
    HomeDiv.appendChild(cuadroDivRegister);

    //FONDO
    const fondoRegister = document.createElement('img');
    fondoRegister.src = '../Imagenes/Register.jpg';
    fondoRegister.className = 'fondoRegister';
    HomeDiv.appendChild(fondoRegister);

    return HomeDiv;

};


// const auth = getAuth();
// signInWithPopup(auth, provider)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//     });