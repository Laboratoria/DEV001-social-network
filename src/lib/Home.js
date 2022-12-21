export const Home = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'contenedorHome';
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Registrarte';
    buttonRegister.className = 'botonRegistro';

    buttonLogin.textContent = 'Iniciar Sesión';
    buttonLogin.className = 'botonLogin';

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    //Al darle click al botón registro se ejecuta el onNavigate (register)
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);

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

    //Bienvenid@
    const frase2 = document.createElement('p');
    frase2.className = 'frase2';
    frase2.textContent = '¡ Bienvenid@ !'
    HomeDiv.appendChild(frase2);

    //¿Qué deseas hacer?
    const frase3 = document.createElement('p');
    frase3.className = 'frase3';
    frase3.textContent = '¿Qué deseas hacer?'
    HomeDiv.appendChild(frase3);



    //CUADRO TRANSPARENTE
    const cuadroDiv = document.createElement('div');
    cuadroDiv.className = 'cuadroTransparente';
    HomeDiv.appendChild(cuadroDiv);

    //FONDO
    const fondoHome = document.createElement('img');
    fondoHome.src = '../Imagenes/Home.jpg';
    fondoHome.className = 'fondoHome';
    HomeDiv.appendChild(fondoHome);


    return HomeDiv;
    //Esto construye dos botones dentro de un div
    //Es la pantalla de bienvenida
};