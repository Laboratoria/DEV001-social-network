export const footer = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footer');
  footerContainer.classList.add('footerHome');
  footerContainer.innerHTML = `
    <p>Copyright &copy; 2022 <a target="_blank" href="https://github.com/Januha88">Januhary González</a> and <a href="https://github.com/PameSegovia" target="_blank">Pamela Segovia</a> and </p>
    
    `;
  return footerContainer;
};
