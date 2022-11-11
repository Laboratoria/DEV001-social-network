const modal = document.getElementById('mi_modal');
const textModal = document.getElementById('text_modal');
const textModal2 = document.getElementById('text_modal_2');

const cerrar = document.getElementById('close');

export const modalMensaje = (mensaje, mensaje2) => {
  modal.style.display = 'block';
  textModal.innerText = mensaje;
  textModal2.innerText = mensaje2;
  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};
