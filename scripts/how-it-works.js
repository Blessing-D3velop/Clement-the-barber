const bookButtons = document.querySelectorAll(".js-book-now-btn");

const whatsappNumber = "27718723420";

const defaultMessage =
`Hi 👋, I would like to book a haircut at Clement the Barber. Please let me know available times.`;

bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(link, "_blank");
  });
});