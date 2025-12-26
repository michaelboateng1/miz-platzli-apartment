const body = document.body;
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

// 1. Change background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "text-black", "shadow-md", "py-4");
    navbar.classList.remove("text-white", "py-6");
    navLinks.forEach((link) => link.classList.add("text-black"));
  } else {
    navbar.classList.remove("bg-white", "text-black", "shadow-md", "py-4");
    navbar.classList.add("text-white", "py-6");
    navLinks.forEach((link) => link.classList.remove("text-black"));
  }
});

// 2. Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
  body.classList.add("overflow-hidden");
  mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  mobileMenu.classList.add("translate-x-full");
});
