import { renderHeaderComponent } from "./header-component.js";

export function renderUserPostsPageComponent({ appEl, user, posts }) {
  const userInfoHtml = `
    <div class="posts-user-header">
      <img src="${user.imageUrl}" class="posts-user-header__user-image">
      <p class="posts-user-header__user-name">${user.name}</p>
    </div>
  `;
 
  const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <div>
        ${userInfoHtml}
      </div>
      <ul class="posts">
      </ul>
    </div>
  `;
 
  appEl.innerHTML = appHtml;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  const postsContainer = document.querySelector(".posts");
  
  posts.forEach((post) => {
    if (post.user.id === user.id) {
      const postLi = document.createElement("li");
      postLi.classList.add("post");
      renderPostComponent({ element: postLi, post });
      postsContainer.appendChild(postLi);
    }
  });
}
  

  
