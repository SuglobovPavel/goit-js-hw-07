import { galleryItems } from './gallery-items.js';
// Change code below this line
const boxForGallery = document.querySelector(".gallery");
let backdropHref;

let instance; 
function clickOnKeyCloseModal(e){
   console.log(e.code);
   const visible = instance.visible();
   // if(!visible){
   //    window.removeEventListener("keydown", clickOnKeyCloseModal);
   //    return;
   // }
   if(e.code != "Escape"){
      return;
   }
   instance.close();
   window.removeEventListener("keydown", clickOnKeyCloseModal);
}
function clickOnBackdrModal(e){
   window.removeEventListener("keydown", clickOnKeyCloseModal);
   backdropHref.removeEventListener("click", clickOnBackdrModal);
}

function clickOnImage(srcImage){
   instance = basicLightbox.create(`
      <img src="${srcImage}" width="800" height="600">
   `);
   instance.show();
   let visibleLaitbox = instance.visible();
   window.addEventListener("keydown", clickOnKeyCloseModal);
   backdropHref = document.querySelector(".basicLightbox");

   backdropHref.addEventListener("click", clickOnBackdrModal);
}

function renderGallery(images){
   
   let galleryContent = ``;

   images.map( ({preview, description, original}) => {
      galleryContent += `
      <div class="gallery__item">
         <a class="gallery__link" href="${original}">
         <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
         />
         </a>
      </div>` 
   })

   boxForGallery.innerHTML = galleryContent;
}
renderGallery(galleryItems);

boxForGallery.addEventListener("click", function(e){
   e.preventDefault();
   if(!e.target.nodeName === "IMG"){
      return false;
   }
   clickOnImage(e.target.dataset.source);
});