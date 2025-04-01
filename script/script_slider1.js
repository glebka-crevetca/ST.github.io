const slides = document.getElementById('slides');
const slideCount = document.querySelectorAll('.slide1').length-1;
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
    const offset = -index * 100; 
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount; 
    showSlide(currentIndex);
    resetAutoSlide(); 
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
    resetAutoSlide(); 
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2500); 
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval); 
    startAutoSlide();
}

document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

startAutoSlide(); 
