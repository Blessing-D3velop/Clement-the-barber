const form = document.querySelector(".booking-form");
const popup = document.querySelector(".js-booking-popup");
const closePopup = document.querySelector(".js-popup-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const phone = form.querySelector("input[type='tel']").value.trim();
  const service = form.querySelector("select").value;
  const time = form.querySelector("input[name='time']:checked");

  // VALIDATION
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

  // SUCCESS POPUP
  popup.classList.add("active");

  // reset form
  form.reset();
});

// close popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

// click outside popup to close
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});