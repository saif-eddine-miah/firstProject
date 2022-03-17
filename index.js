let slideIndex = 0;
showSlides(slideIndex);

function slideControls(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i = 0;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
    for (let i = 0; index < slides.length; index++) {
     slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block"; 
  }

const burgerLinks = document.querySelector(".mobile-links")

function showBurgerMenu() {
  burgerLinks.classList.toggle("show-links");
  burgerLinks.classList.toggle("mobile-links");
}