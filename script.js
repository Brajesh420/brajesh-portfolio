function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}
/* BOARD GAME SLIDER */

let currentSlide = 0;

const images = [
  "images/board1.jpg",
  "images/board2.jpg",
  "images/board3.jpg",
  "images/board4.jpg"
];

function showSlide(index) {
  const sliderImage = document.getElementById("slider-image");
  if (sliderImage) {
    sliderImage.src = images[index];
  }
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide(currentSlide);
}