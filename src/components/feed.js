
import {
  saveTask, onGetTasks, deleteTask, getTask, updateTask,
} from '../lib/firebase.js';

export const feed = (onNavigate) => {
  const hdiv = document.createElement('div');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const title = document.createElement('h2');
  const btnLogOut = document.createElement('button');
  const postForm = document.createElement('form');
  const postSpace = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const logOutIcon = document.createElement('i');
  const postList = document.createElement('div');

  hdiv.className = 'hdivFeed';
  nav.className = 'nav';
  header.className = 'header';
  postForm.id = 'postForm';
  title.textContent = 'Welcome...';
  title.className = 'tituloFeed';
  logOutIcon.class = 'bx bx-log-out';
  postSpace.placeholder = "What's on your mind?";
  postSpace.className = 'postSpace';
  postSpace.id = 'postSpace';
  btnSave.textContent = 'Post';
  btnSave.className = 'btnSave';
  btnSave.id = 'btnSave';
  btnLogOut.className = 'btnPost';
  btnLogOut.textContent = 'Log Out';
  postList.className = 'postList';

  header.append(nav);
  nav.append(title, btnLogOut);
  hdiv.append(nav, postForm, postList);
  postForm.append(postSpace, btnSave);
  btnLogOut.append(logOutIcon);

  let editStatus = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      let html = '';
      querySnapshot.forEach((doc) => {
        const showPosts = doc.data();
        const time = showPosts.date.seconds;

        const date = new Date(time * 1000);
        const datePost = `${date.getDate()
        }/${date.getMonth() + 1
        }/${date.getFullYear()
        } ${date.getHours()
        }:${date.getMinutes()
        }:${date.getSeconds()}`;

        html += `
        <div class = 'eachPost'>
        <p>${showPosts.content}</p>
         <p class='date'> ${datePost} </p>
        <span>
        <button class='btn-delete' data-id='${doc.id}'>Delete</button>
        <button class='btn-edit' data-id='${doc.id}'>Edit</button>
        </span>
        </div>
      `;
       
      });
      postList.innerHTML = html;
      const btnsDelete = postList.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id);
        });
      });

      const btnsEdit = postList.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          const doc = await getTask(dataset.id);
          const post = doc.data();

          postForm.postSpace.value = post.content;

          editStatus = true;
          id = doc.id;

          // El contenido del botón no cambia a Post luego de editar. LLEVAR A DUDAS RÁPIDAS∏
          postForm.btnSave.innerText = 'Update';
        });
      });
    });
  });

  // const showPosts =

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
  const currentDate = new Date();
    const postNewContent = postForm.postSpace;

    if (!editStatus) {
      saveTask(postSpace, currentDate);
    } else {
      updateTask(id, { content: postNewContent.value });
      editStatus = false;
    }

    postForm.reset();
  });

  btnLogOut.addEventListener('click', () => {
    onNavigate('/');
  });

  return hdiv;
};
