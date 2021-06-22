document.addEventListener('DOMContentLoaded', (event) => {
  let menuElement = document.getElementsByClassName('mobile__menu')[0];
  let hsb = document.getElementsByClassName('header__menu')[0];
  hsb.addEventListener('click', () => {
    if (menuElement.style.display === "" || menuElement.style.display === "none") {
      menuElement.style.display = "block";
    } else {
      menuElement.style.display = "none";
    }
  })
});