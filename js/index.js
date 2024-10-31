const burger = document.getElementById("burgerbtn");
const menuPanel = document.getElementById("menuList");
const closeBtn = document.getElementById("closeBtn");

burger.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});