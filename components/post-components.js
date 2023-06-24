import { addLike, removeLike } from "../api.js";
import {getToken, goToPage} from "../index.js"
import { USER_POSTS_PAGE } from "../routes.js";

export function renderPostComponent({ element, post }) {
    let likes = 0;
    if (post.likes.length === 1) {
      likes = post.likes[0].name
  } else if (post.likes.length > 2) {
      likes = `${post.likes[0].name} и еще ${post.likes.length - 2} человек`;
  }
    element.innerHTML = `
    <div class="post-header" data-userId="${post.user.id}">
    <img src="${post.user.imageUrl}" class="post-header__user-image">
    <p class="post-header__user-name">${post.user.name}</p>
    </div>
      <div class="post-image-container">
        <img class="post-image" src="${post.imageUrl}">
      </div>
        <div class="post-likes">
          <button data-id="${post.id}" class="like-button">
            <img data-like="${post.isLiked}" src="./assets/images/${post.isLiked ? `like-active.svg`: `like-not-active.svg`}">
          </button>
            <p class="post-likes-text">
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
      `
      ;

element.querySelector('.like-button')
       .addEventListener('click', (event) => {
    const postId = event.target.parentNode.dataset.id;
    const isLiked = event.target.dataset.like;
    if (isLiked == "true") {
        removeLike(postId, getToken())
        .then((result) => {
            renderPostComponent({element, post: result.post})
          })
    } else  {
        addLike(postId, getToken())
        .then((result) => {
        renderPostComponent({element, post: result.post})
        })
        .catch((error) => {
        console.error('Ошибка при постановке лайка:', error);
        });
    }
  })

  element.querySelector(".post-header")
         .addEventListener("click", () => {
            goToPage(USER_POSTS_PAGE, {
            userId: element.dataset.userId,
        });
        });

    return element;
  }
  