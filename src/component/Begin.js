export const Begin = (mensaje) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = mensaje;
  return HomeDiv;
};
