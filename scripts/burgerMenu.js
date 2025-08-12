const root = document.getElementById("header");
const overlay = document.getElementById("burger-overlay");
const burgerButton = document.getElementById("burger-btn");


burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle('is-active')
  overlay.classList.toggle('is-active')

  document.documentElement.classList.toggle("is-lock")
})