// Slides
let currentSlide = 1;
function navigateSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  currentSlide += direction;

  if (currentSlide > slides.length) {
    currentSlide = 1;
  } else if (currentSlide < 1) {
    currentSlide = slides.length;
  }

  // mostra o slide atual e esconde os outros
  
  for (const slide of slides) {
    slide.style.display = "none";
  }
  slides[currentSlide - 1].style.display = "block";
}

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function navigateSlide(n) {
  showSlides((slideIndex += n));
}

const dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    showSlides(i);
  });
}

showSlides(0);

function rotateCard(selector) {
  const blocks = document.querySelectorAll(selector);

  blocks.forEach((block) => {
    block.classList.toggle("hovered");
  });
}


document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function() {
    scrollToTop();
  });
});

function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
