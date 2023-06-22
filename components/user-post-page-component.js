export function renderUserPostsPageComponent({ appEl }) {
    const postsHtml = posts.map((post, index) => {
      return `
      <li class="post">
      <div class="post-header" data-user-id="${post.user.id}">
      <img src="${post.user.imageUrl}" class="post-header__user-image">
      <p class="post-header__user-name">${post.user.name}</p>
  </div>
  <div class="post-image-container">
    <img class="post-image" src="${post.imageUrl}">
  </div>
  <div class="post-likes">
    <button data-postId="${post.id}" class="like-button">
      <img src="./assets/images/like-active.svg">
    </button>
    <p class="post-likes-text">
    Нравится: <strong>${post.likes.name}</strong>
    </p>
  </div>
  <p class="post-text">
    <span class="user-name">${post.user.name}</span>
    ${post.description}
  </p>
  <p class="post-date">
    ${post.createdAt}
  </p>
  </li>
  `
    })
    .join('');
  
    const appHtml = `
                <div class="page-container">
                  <div class="header-container"></div>
                  <div class="posts-user-header">
                    <img src="${post.user.imageUrl}" class="posts-user-header__user-image">
                    <p class="posts-user-header__user-name">${post.user.name}</p>
                </div>
                  <ul class="posts">
                    ${postsHtml}
                  </ul>
                </div>`;
  
    appEl.innerHTML = appHtml;
   
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
  
    for (let userEl of document.querySelectorAll(".post-header")) {
      userEl.addEventListener("click", () => {
        goToPage(USER_POSTS_PAGE, {
          userId: userEl.dataset.userId,
        });
      });
    }
  }