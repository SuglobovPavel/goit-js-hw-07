import { galleryItems } from './gallery-items.js';
// Change code below this line
const boxForGallery = document.querySelector(".gallery");
function renderGallery(images){
   
   let galleryContent = ``;

   images.map( ({preview, description, original}) => {
      galleryContent += `
      <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
   })

   boxForGallery.innerHTML = galleryContent;
}
renderGallery(galleryItems);


var lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: '250'
});

console.log(galleryItems);
