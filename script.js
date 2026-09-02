// Hero Carousel Logic
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Start Carousel
setInterval(nextSlide, slideInterval);

// Lazy Loading is handled via HTML `loading="lazy"` attribute
