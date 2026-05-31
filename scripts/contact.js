const form = document.querySelector(".booking-form");
const popup = document.querySelector(".js-booking-popup");
const closePopup = document.querySelector(".js-popup-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const phone = form.querySelector("input[type='tel']").value.trim();
  const service = form.querySelector("select").value;
  const time = form.querySelector("input[name='time']:checked");


  if (!name) {
    alert("Please enter your name");
    return;
  }

  if (!phone) {
    alert("Please enter your phone number");
    return;
  }

  if (!service) {
    alert("Please select a service");
    return;
  }

  if (!time) {
    alert("Please select a preferred time");
    return;
  }

  popup.classList.add("active");


  form.reset();
});


closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});


popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});