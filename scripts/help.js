const helpBtn = document.querySelector(".js-help-btn");

const whatsappNumber = "27718723420";

helpBtn.addEventListener("click", () => {

  const message = `Hi Clement 👋

I need help choosing a hairstyle.

I saw your website and would like guidance on:
- Best style for my face shape
- Pricing
- Booking an appointment`;

  const url =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});