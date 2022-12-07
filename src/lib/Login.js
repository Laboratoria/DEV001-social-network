export const Login = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Inicia Sesión';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al inicio';
    buttonHome.addEventListener('click', () => onNavigate('/'));

    HomeDiv.appendChild(buttonHome);
    return HomeDiv;
};

// Falta el evento en el login
// Al momento de pulsar el botón regresar al inicio llevarme al home***********