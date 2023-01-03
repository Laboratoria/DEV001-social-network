import { signOut } from 'firebase/auth';
import {
  saveTask, onGetTasks, deleteTask, getTask, updateTask, auth, currentUserInfo,
} from '../lib/index';

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
  const appName = document.createElement('h2'); // modificado
  const welcomeText = document.createElement('div'); // modificado

  console.log(JSON.parse(localStorage.getItem('user')));

  hdiv.className = 'hdivFeed';
  nav.className = 'nav';
  header.className = 'header';
  postForm.id = 'postForm';
  title.textContent = 'Welcome to'; // modificado
  title.className = 'tituloFeed';
  logOutIcon.class = 'bx bx-log-out';
  postSpace.placeholder = "What's on your mind?";
  postSpace.className = 'postSpace';
  postSpace.id = 'postSpace';
  btnSave.textContent = 'Post';
  btnSave.className = 'btnSave';
  btnSave.id = 'btnSave';
  btnLogOut.className = 'btnLogout'; // modificado
  btnLogOut.textContent = 'Log Out';
  postList.className = 'postList';
  appName.textContent = 'FESTIFAN'; // modificado
  appName.className = 'appName'; // modificado
  welcomeText.className = 'welcomeText'; // modificado

  welcomeText.append(title, appName); // modificado
  header.append(nav);
  nav.append(welcomeText, btnLogOut); // modificado
  hdiv.append(nav, postForm, postList);
  postForm.append(postSpace, btnSave);
  btnLogOut.append(logOutIcon);

  let editStatus = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    /*     onAuthStateChanged(auth, user =>{
      console.log(document.getElementById('postForm'));
      console.log(user)
    }); */

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

        // modifiqué clases de user, content y date, span_btns, user_content

        html += `
        <div class = 'eachPost'>
        <span class='user_content'>
        <p class='eachPost_user'>${showPosts.user}</p> 
        <p class='eachPost_content'>${showPosts.content}</p>
        </span>
        <span class='btn_date'>
        <span class='span_btns'>
        ${currentUserInfo().uid === showPosts.uid ? `<button class='btn-delete' data-id='${doc.id}'>Delete</button>` : ''}
        ${currentUserInfo().uid === showPosts.uid ? `<button class='btn-edit' data-id='${doc.id}'>Edit</button>` : ''}
        </span>
        <span class='eachPost_date'><p class='p_date'> ${datePost} </p></span>
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
      saveTask(postSpace, currentDate, currentUserInfo().displayName, currentUserInfo().uid);
    } else {
      updateTask(id, { content: postNewContent.value });
      editStatus = false;
    }

    postForm.reset();
  });

  btnLogOut.addEventListener('click', () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  });

  return hdiv;
};
