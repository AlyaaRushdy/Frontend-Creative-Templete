const header = document.getElementById("header");

document.documentElement.style.setProperty(
  "--header-height",
  `${header.offsetHeight}px`
);

window.addEventListener("scroll", () => {
  // adding header__scrolled class incase of scrolling past 0
  if (window.scrollY != 0) {
    header.classList.add("header__scrolled");
  } else {
    header.classList.remove("header__scrolled");
  }
});
