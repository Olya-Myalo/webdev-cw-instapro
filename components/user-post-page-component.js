

export function renderUserPostsPageComponent ({ appEl, user, posts }) {
  const userInfoHtml = `
    <div class="user-info">
      <img src="${user.imageUrl}" class="user-info__user-image">
      <p class="user-info__user-name">${user.name}</p>
    </div>
  `;

  const postsHtml = posts.map((post, index) => {
    let likes = 0;
    if (post.likes.length === 1) {
      likes = post.likes[0].name
  } else if (post.likes.length === 2) {
      likes = `${post.likes[0].name}, ${post.likes[1].name}`;
  } else if (post.likes.length > 2) {
      likes = `${post.likes[0].name}, ${post.likes[1].name} и еще ${post.likes.length - 2} человек`;
  }
    return `
      <li class="post">
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
              <p class="post-likes-text" data-index="${index}">
              Нравится: <strong class="likes-counter">${likes}</strong>
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
    `;
  }).join('');

  const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <div>
      ${userInfoHtml}
      </div>
      <ul class="posts">
        ${postsHtml}
      </ul>
    </div>
  `;

  appEl.innerHTML = appHtml;
  //  renderHeaderComponent({
  //     element: document.querySelector(".add-or-login-button")
  //     .addEventListener("click", () => {
  //       if (user) {
  //         goToPage(ADD_POSTS_PAGE);
  //       } else {
  //         goToPage(AUTH_PAGE);
  //       }
  //     });
  
  //   element.querySelector(".logo").addEventListener("click", () => {
  //     goToPage(POSTS_PAGE);
  //   });
  
  //   element.querySelector(".logout-button")?.addEventListener("click", logout);
  
  //   return element;
  //   });
}
  

  
