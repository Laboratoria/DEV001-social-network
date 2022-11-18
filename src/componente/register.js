export const Register = () => {
  const registerDiv = document.createElement('section');
  registerDiv.classList.add('sectionRegister');

  const buttonRegister = document.createElement('button');

  buttonRegister.textContent = 'Registrate';

  registerDiv.appendChild(buttonRegister);

  return registerDiv;
};
