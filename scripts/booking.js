emailjs.init("Xbby6njLy-a_OCI37");

const form = document.querySelector('.booking-form');
const popup = document.querySelector('.js-booking-popup');
const popupCloseBtn = document.querySelector('.js-popup-close');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name =
    document.getElementById('customer-name').value.trim();

  const phone =
    document.getElementById('customer-phone').value.trim();

  const service =
    document.getElementById('customer-service').value;

  const selectedTime =
    document.querySelector('input[name="time"]:checked');

  if (!selectedTime) {
    alert('Please select a preferred time.');
    return;
  }

  const time = selectedTime.value;

  emailjs.send(
    'service_fnmnfco',
    'template_k5z7ubv',
    {
      customer_name: name,
      customer_phone: phone,
      service: service,
      preferred_time: time
    }
  )
  .then(() => {

    popup.classList.add('show');
    form.reset();

  })
  .catch((error) => {

    console.error(error);

    alert(
      'Something went wrong. Please try again.'
    );

  });

});

popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});