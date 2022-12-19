import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase.js';

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

  window.addEventListener('DOMContentLoaded', async () => {
    const getTasks = () => getDocs(collection(db, 'post'));
    const querySnapshot = await getTasks();
    console.log(querySnapshot);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const myPost = postForm.postSpace;
    console.log(myPost.value);
    // saveTask(myPost);
    // return
    // addDoc(collection(db, 'post', { content: postSpace.value })).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });

    addDoc(collection(db, 'posts'), {
      content: postSpace.value,
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

    postForm.reset();
  });

  //   const posts = await loadPosts();
  //   console.log(posts);
  //   const postsList = document.getElementById('root');

  //   posts.forEach((post) => {
  //     postsList.innerHTML += `
  //       <li>
  //       ${post.content}
  //       </li>
  //       `;
  //   });
  // });

  // btnSave.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   savePost(postSpace.value);
  // });

  // btnSave.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   if (postSpace.value !== '') {
  //     savePosts(postForm.content.value);
  //     // savePosts.innerHTML = postSpace.value;
  //     // alert(postSpace.value)
  //   } else {
  //     return alert('Error: Su publicación esta vacia');
  //   }
  // });

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
