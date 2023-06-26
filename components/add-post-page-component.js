import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";

  const render = () => {
    const appHtml = `
    <div class="page-container">
      <div class="header-container">
  <div class="page-header">
      <h1 class="logo">instapro</h1>
      <button class="header-button add-or-login-button">
      <div title="Добавить пост" class="add-post-sign"></div>
      </button>
      <button title="Админ" class="header-button logout-button">Выйти</button>   
  </div>
</div>
      <div class="form">
        <h3 class="form-title">Добавить пост</h3>
        <div class="form-inputs">
          <div class="upload-image-container">
  <div class="upload=image">
      
            <label class="file-upload-label secondary-button">
                <input id="image-input" type="file" class="file-upload-input" style="display:none">
                Выберите фото
            </label>
          
      
  </div>
</div>
          <label>
            Опишите фотографию:
            <textarea id="text-input" class="input textarea" rows="4"></textarea>
            </label>
            <button class="button" id="add-button">Добавить</button>
        </div>
      </div>
    </div>
  `;

    appEl.innerHTML = appHtml;
    function escapeHTML(input) {
      return input.replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/&/g, '&amp;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;');
    }
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });

    const uploadImageContainer = appEl.querySelector(".upload-image-container");

    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }
    document.getElementById("add-button").addEventListener("click", (event) => {
      const text = escapeHTML(document.getElementById("text-input").value);
      if (!text) {
        alert("Добавьте комментарий к фотографии...");
        return;
      }
      if (!imageUrl) {
        alert("Добавьте фотографию");
        return;
      }
      onAddPostClick({
        description: text,
        imageUrl: imageUrl,
      });
    });
  };
  render();
}
