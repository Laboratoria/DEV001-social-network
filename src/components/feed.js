import { getTasks, saveTask } from '../lib/firebase.js';

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

  header.append(nav);
  nav.append(title, btnLogOut);
  hdiv.append(nav, postForm);
  postForm.append(postSpace, btnSave);
  btnLogOut.append(logOutIcon);

  const posts = [];
  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getTasks();
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
  });

  // const showPosts =

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    saveTask(postSpace);

    postForm.reset();
  });

  // const showPosts = async () => {
  //   const posts = await loadPost();

  //   posts.forEach((post) => {
  //     postsList.innerHTML += `
  //       <li>${post.post}</li>
  //       `;
  //   });
  // };

  // showPosts();

  btnLogOut.addEventListener('click', () => {
    onNavigate('/');
  });

  return hdiv;
};
