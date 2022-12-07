export const Home = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Registrarte';
    buttonLogin.textContent = 'Iniciar Sesión';

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    //Al darle click al botón registro se ejecuta el onNavigate (register)
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);

    return HomeDiv;
    //Esto construye dos botones dentro de un div
    //Es la pantalla de bienvenida
};