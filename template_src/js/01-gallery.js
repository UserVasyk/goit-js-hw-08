import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");

function makingGalleryItem(options) {
  return options
    .map(
      (item) =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");
}
galleryBox.insertAdjacentHTML("beforeend", makingGalleryItem(galleryItems));

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
