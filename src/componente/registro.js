export const registrate = () => {
  const registrateDiv = document.createElement('section');
  registrateDiv.classList.add('sectionRegistrate');

  const buttonRegistrate = document.createElement('button');

  buttonRegistrate.textContent = 'Registrate';

  registrateDiv.appendChild(buttonRegistrate);

  return registrateDiv;
};
