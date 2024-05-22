const dir = "./images/portfolio";
const header = document.getElementById("header");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav__a");
const navButton = document.getElementsByClassName("navbar__button")[0];
const sections = document.querySelectorAll("section");
const imageContainer = document.getElementsByClassName(
  "portfolio_image-container"
)[0];
let imageELement = "";

document.documentElement.style.setProperty(
  "--header-height",
  `${header.offsetHeight}px`
);

for (let i = 0; i < 6; i++) {
  let image = new Image();
  image.setAttribute("src", `${dir}/${i + 1}.jpg`);
  image.classList.add("portfolio__img");
  image.setAttribute("class", "portfolio__img");
  imageELement += image.outerHTML;
}
imageContainer.innerHTML = imageELement;

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + header.offsetHeight;

  // adding header--white class incase of scrolling past 0
  if (window.scrollY != 0 || window.visualViewport.width <= 991) {
    header.classList.add("header--white");
  } else {
    header.classList.remove("header--white");
  }

  // updating navbar based on current section
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});

// menu toggler
if (window.visualViewport.width <= 991) {
  header.classList.add("header--white");
  window.addEventListener("click", (event) => {
    if (event.target === navButton || event.target === navButton.children[0]) {
      navMenu.classList.toggle("verticle-menu");
    } else if (navMenu.classList.contains("verticle-menu")) {
      navMenu.classList.remove("verticle-menu");
    }
  });
}
