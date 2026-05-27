import { services } from "./data/servicesData.js";

const galleryGrid = document.querySelector(".js-gallery-grid");

// flatten images
const images = [];

services.forEach(service => {
  service.images.forEach(img => {
    images.push({
      src: img,
      title: service.name
    });
  });
});

// render grid
images.forEach((img, index) => {

  const card = document.createElement("div");
  card.classList.add("gallery-card");

  card.innerHTML = `
    <img src="${img.src}" alt="">
    <div class="gallery-hover">${img.title}</div>
  `;

  card.addEventListener("click", () => openLightbox(index));

  galleryGrid.appendChild(card);
});


// LIGHTBOX
const lightbox = document.querySelector(".js-lightbox");
const lightboxImg = document.querySelector(".js-lightbox-img");
const closeBtn = document.querySelector(".js-close");
const nextBtn = document.querySelector(".js-next");
const prevBtn = document.querySelector(".js-prev");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateImage();
  lightbox.classList.add("active");
}

function updateImage() {
  lightboxImg.src = images[currentIndex].src;
}

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

