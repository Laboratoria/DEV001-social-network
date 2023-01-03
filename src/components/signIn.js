import { funtionSignIn, funtionUserGoogle } from '../lib/index';

export const signIn = (onNavigate) => {
  const divSignIn = document.createElement('div');
  const title = document.createElement('p');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btn = document.createElement('button');
  const btnBack = document.createElement('button');
  const or = document.createElement('p');
  const btnGoogle = document.createElement('button');
  const logo = document.createElement('img');

  divSignIn.className = 'divSignIn';
  title.textContent = 'Welcome to your account';
  title.className = 'introSignIn';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';
  logo.className = 'logo';
  inputEmail.placeholder = 'example@youremail.com';
  inputEmail.type = 'email';
  inputEmail.required = 'true';
  inputEmail.className = 'inputSignIn';
  inputPass.placeholder = '*******';
  inputPass.type = 'password';
  inputPass.required = 'true';
  inputPass.className = 'inputSignIn';
  btn.className = 'btnSignIn';
  btn.textContent = 'Sign In';
  btnBack.className = 'btnBack';
  btnBack.textContent = 'Back';
  or.textContent = 'or';
  or.className = 'introSignIn';
  btnGoogle.className = 'btnGoogle';
  btnGoogle.innerHTML = '<img class="img-google" src="./lib/archivo_css/Imagenes/SocialGoogle.png" /> Sign in with Google';

  btn.addEventListener('click', async () => {
    /*     onNavigate('/'); */
    const email = inputEmail.value;
    const password = inputPass.value;
    const resultSignIn = await funtionSignIn(email, password);
    if (typeof (resultSignIn) === 'object') {
      localStorage.setItem('user', JSON.stringify(resultSignIn));
      onNavigate('/feed');
    } else {
      alert('Please complete information');
    }
  });

  btnGoogle.addEventListener('click', async () => {
    const resultGoogle = await funtionUserGoogle();
    if (resultGoogle !== 'error') {
      onNavigate('/feed');
    }
  });

  btnBack.addEventListener('click', () => {
    onNavigate('/');
  });

  divSignIn.append(logo, title, inputEmail, inputPass, btn, btnBack, or, btnGoogle);

  return divSignIn;
};
