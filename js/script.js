// NAVBAR SCRIPT
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  toggleBtn.setAttribute("aria-expanded", isOpen);
});
// NAVBAR SCRIPT END
