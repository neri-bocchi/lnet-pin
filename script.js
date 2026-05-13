const links = [...document.querySelectorAll(".nav a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activateLink = () => {
  let currentId = "";

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top <= 140) currentId = section.id;
  });

  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
};

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("scroll", activateLink, { passive: true });
activateLink();
