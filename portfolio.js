const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

menuBtn.onclick = function () {
  sideMenu.style.width = "250px";
};

closeBtn.onclick = function () {
  sideMenu.style.width = "0";
};