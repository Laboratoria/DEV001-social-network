// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { registrarUsuario } from "../Firebase";

export const Register = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Regístrate';
    const buttonHome = document.createElement('button');
    buttonHome.className = 'salida1';

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



    //BOTÓN REGISTRARTE / BOTÓN INPUT
    const buttonRegistro = document.createElement('button');
    buttonRegistro.textContent = 'Registrarte';
    buttonHome.className = 'botoninput';
    HomeDiv.appendChild(buttonRegistro);

    buttonRegistro.addEventListener('click', (e) => {
        e.preventDefault()

        let email = document.getElementsByClassName('correo')[0].value;
        let contraseña = document.getElementsByClassName('password')[0].value;


        registrarUsuario(email, contraseña).then((exito) => {
            console.log(exito);

            // ...
        }).catch((error) => {
            console.log(error);


            // ...
        });



    })
    return HomeDiv;

};