const header = document.getElementById("header");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav__a");
const sections = document.querySelectorAll("section");

document.documentElement.style.setProperty(
  "--header-height",
  `${header.offsetHeight}px`
);

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + header.offsetHeight;

  // adding header__scrolled class incase of scrolling past 0
  if (window.scrollY != 0) {
    header.classList.add("header__scrolled");
  } else {
    header.classList.remove("header__scrolled");
  }

  // updating navbar based on current section
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      navLinks.forEach((link) => {
        console.log("inside scrollposition");
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          console.log("inside equality");
          link.classList.add("active");
        }
      });
    }
  });
});
