import { services } from "./data/servicesData.js";

const servicesGrid =
document.querySelector(".js-services-grid");

const toggleBtn =
document.querySelector(".js-toggle-btn");

const whatsappNumber = "27718723420";

let showingAll = false;

// how many to show initially
let visibleCount = 4;

function renderServices() {

  servicesGrid.innerHTML = "";

  const list = showingAll
    ? services
    : services.slice(0, visibleCount);

  list.forEach((service) => {

    let currentImage = 0;

    const message = `Hi, I would like to book this service:

💈 Service: ${service.name}
💰 Price: ${service.price}

Please let me know available times.`;

    const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const card = document.createElement("div");
    card.classList.add("service-card");

    card.innerHTML = `
    
    <div class="service-image-wrapper">

      <img class="service-image"
        src="${service.images[0]}"
        alt="${service.name}">

      <div class="service-nav">
        <button class="service-btn prev-btn">◀</button>
        <button class="service-btn next-btn">▶</button>
      </div>

    </div>

    <div class="service-content">

      <h3 class="service-name">${service.name}</h3>

      <p class="service-description">${service.description}</p>

      <div class="service-price">${service.price}</div>

      <button class="service-book-btn js-book-btn">
        Book on WhatsApp
      </button>

    </div>
    `;

    const image = card.querySelector(".service-image");

    card.querySelector(".next-btn").addEventListener("click", () => {
      currentImage = (currentImage + 1) % service.images.length;
      image.src = service.images[currentImage];
    });

    card.querySelector(".prev-btn").addEventListener("click", () => {
      currentImage =
        (currentImage - 1 + service.images.length) %
        service.images.length;

      image.src = service.images[currentImage];
    });

    card.querySelector(".js-book-btn").addEventListener("click", () => {
      window.open(whatsappLink, "_blank");
    });

    servicesGrid.appendChild(card);
  });

  // update button text
  toggleBtn.textContent = showingAll
    ? "View Less"
    : "View More";
}

// toggle logic
toggleBtn.addEventListener("click", () => {
  showingAll = !showingAll;
  renderServices();
});

// initial render
renderServices();