// COUNTDOWN

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const futureTime = futureDate.getTime();

const tick = function () {
  const today = new Date().getTime();
  const time = futureTime - today;
  //console.log(time);

  days.innerHTML = String(Math.trunc(time / oneDay)).padStart(2, 0);
  hours.innerHTML = String(Math.trunc((time % oneDay) / oneHour)).padStart(
    2,
    0
  );
  minutes.innerHTML = String(Math.trunc((time % oneHour) / oneMinute)).padStart(
    2,
    0
  );
  seconds.innerHTML = String(Math.trunc((time % oneMinute) / 1000)).padStart(
    2,
    0
  );
};

tick();
setInterval(tick, 1000);

// MODAL AND FORM

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnOpenModal = document.getElementById("btn-open-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const form = document.querySelector(".subscribe-form");
const btnSubmit = document.getElementById("btn-submit");
const message = document.getElementById("message");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const submitForm = function (e) {
  e.preventDefault();
  message.textContent = "Inscrição feita! 💜";
  //setTimeout(() => (message.textContent = ""), 3000);
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
form.addEventListener("submit", submitForm);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
