export const feed = (onNavigate) => {
  const hdiv = document.createElement('div');
  const nav = document.createElement('nav');
  const title = document.createElement('h2');
  const btnLogOut = document.createElement('button');
  const postForm = document.createElement('form');
  const postSpace = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const logOutIcon = document.createElement('i');

  hdiv.className = 'hdivFeed';
  postForm.id = 'postForm';
  title.textContent = 'Welcome...';
  logOutIcon.class = 'bx bx-log-out';
  postSpace.placeholder = "What's on your mind?";
  postSpace.className = 'postSpace';
  postSpace.id = 'postSpace';
  btnSave.textContent = 'Post';
  btnSave.className = 'btnSave';
  btnLogOut.className = 'btnPost';
  btnLogOut.textContent = 'Log Out';

  hdiv.append(nav, postForm);
  btnLogOut.append(logOutIcon);
  nav.append(title, btnLogOut);
  postForm.append(postSpace, btnSave);

  //   btnSave.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     if (postForm.content.value !== '') {
  //       savePosts(postForm.content.value);
  //     } else {
  //       return alert('Error: Su publicación esta vacia');
  //     }
  //   });

  //   const showPosts = async () => {
  //     const posts = await loadPost();

  //     posts.forEach((post) => {
  //       postsList.innerHTML += `
  //       <li>${post.post}</li>
  //       `;
  //     });
  //   };

  //   showPosts();

  //   btnLogOut.addEventListener('click', () => {
  //     onNavigate('/');
  //   });

  return hdiv;
};
