export const Register = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = 'Regístrate';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar al inicio';

    buttonHome.addEventListener('click', () => onNavigate('/'));


    HomeDiv.appendChild(buttonHome);
    return HomeDiv;
};