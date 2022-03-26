const $ = document;

const navbarButton = $.querySelector(".nav-toggle");
const menuLinks = $.querySelector(".links");

window.addEventListener("load", alert("Run the project on mobile size"));

navbarButton.addEventListener("click", () => {
      // show menu
      menuLinks.classList.toggle("show-links");
      // rotate the menu button
      navbarButton.classList.toggle("transform-button");
});
