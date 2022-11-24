// Testeo de landing page
import { onNavigate } from '../src/main';

describe('myLandingPage', () => {
  it('btnShowPost crea elementos nuevos al hacer click', (done) => {
    // cargar el landing page
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/landingPage');

    // verificar q q la lista de post este vacia
    let postList = document.querySelector('.containerPosts2');
    expect(postList.childElementCount).toBe(0);

    // hacer click en el boton btnShowPost
    const btn = document.querySelector('.buttonSeePosts');
    btn.dispatchEvent(new Event('click'));

    // se cargaron los posts
    postList = document.querySelector('.containerPosts2');
    console.log(postList.childElementCount);
  });
});
