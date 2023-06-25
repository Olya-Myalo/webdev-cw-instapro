import { renderHeaderComponent } from "./header-component.js";
import { renderPostComponent } from "./post-components.js";
import { POSTS_PAGE } from "../routes.js";

export function renderPostsPageComponent({ appEl, posts }) {
  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
  const appHtml = `
              <div class="page-container">
                <div class="header-container"></div>
                <ul class="posts">
                </ul>
              </div>`;

  appEl.innerHTML = appHtml;
 
  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });
   
  posts.forEach((post) => {
    const postsContainer = document.querySelector(".posts");
    const postLi = document.createElement("li");
    postLi.classList.add("post");
    renderPostComponent({element: postLi, post, page: POSTS_PAGE});
    postsContainer.appendChild(postLi)
  });

}

  