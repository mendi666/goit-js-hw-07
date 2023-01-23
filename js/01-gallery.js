import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function addGallery(image) {
  return image
    .map(({ preview, original, description }) => {
      return `<div class="gallery-item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

const imageItemsMarkup = addGallery(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageItemsMarkup);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => galleryRef.addEventListener("keydown", escapeClose),
      onClose: (instance) =>
        galleryRef.removeEventListener("keydown", escapeClose),
    }
  );

  instance.show();

  function escapeClose(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
