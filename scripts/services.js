import { services } from "./data/servicesData.js";

const servicesGrid =
document.querySelector(".js-services-grid");

const whatsappNumber = "27718723420"; // WhatsApp format (SA = 27 + number)

services.forEach((service, index) => {

  let currentImage = 0;

  const card = document.createElement("div");
  card.classList.add("service-card");

  const message = `Hi, I would like to book this service:

💈 Service: ${service.name}
💰 Price: ${service.price}

Please let me know available times.`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  card.innerHTML = `
  
  <div class="service-image-wrapper">

    <img
      class="service-image"
      src="${service.images[0]}"
      alt="${service.name}">

    <div class="service-nav">

      <button class="service-btn prev-btn">◀</button>
      <button class="service-btn next-btn">▶</button>

    </div>

  </div>

  <div class="service-content">

    <h3 class="service-name">
      ${service.name}
    </h3>

    <p class="service-description">
      ${service.description}
    </p>

    <div class="service-price">
      ${service.price}
    </div>

    <button href="${whatsappLink}" target="_blank" class="service-book-btn">
      Book on WhatsApp
    </button>

  </div>
  `;

  const image =
  card.querySelector(".service-image");

  card.querySelector(".next-btn")
  .addEventListener("click", () => {

    currentImage++;

    if (currentImage >= service.images.length) {
      currentImage = 0;
    }

    image.src = service.images[currentImage];
  });

  card.querySelector(".prev-btn")
  .addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
      currentImage = service.images.length - 1;
    }

    image.src = service.images[currentImage];
  });

  servicesGrid.appendChild(card);
});