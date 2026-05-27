const navBox = document.getElementById("navBox");
const navMenuBtn = document.getElementById("navMenuBtn");

navMenuBtn.addEventListener("click", () => {
  navBox.classList.toggle("h-20");
  navBox.classList.toggle("h-85");
});
