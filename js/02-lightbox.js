import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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
    alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

const imageItemsMarkup = addGallery(galleryItems);

galleryRef.innerHTML = imageItemsMarkup;

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  blockStandartAction(e);
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
    scrollZoom: false,
  });

  if (e.target.nodeName !== "IMG") {
    close.SimpleLightbox;
  }
}

function blockStandartAction(e) {
  e.preventDefault();
}
