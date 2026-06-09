// Hamburger toggle
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

// Close menu when a nav link is clicked
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
  });
});

// Scroll spy (active nav link)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#nav-menu a");

function updateActive() {
  let current = "";
  sections.forEach((sec) => {
    // activate a section when its top is within 120 px of the viewport top
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActive);
updateActive();

//download button
const btnDownload = document.getElementById("btnDownload");

btnDownload.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "files/Resume.pdf";
  link.download = "Resume.pdf";
  link.click();
});
