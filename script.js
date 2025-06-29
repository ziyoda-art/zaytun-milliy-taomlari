// ============ TOGGLE MENU ============
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// video uchun play
const video = document.getElementById('myVideo');
const overlay = document.getElementById('overlay');

function playVideo() {
  video.play();
  overlay.style.display = 'none';
}