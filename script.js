// =============
// HERO SLIDER
// =============

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let autoSlide;

// =============
// SHOW SLIDE
// =============

function showSlide(index) {

    if (index >= slides.length) {

        currentSlide = 0;

    } else if (index < 0) {

        currentSlide = slides.length - 1;

    } else {

        currentSlide = index;

    }

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });

    slides[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");

}

// =============
// NEXT
// =============

function nextSlide() {

    showSlide(currentSlide + 1);

}

// =============
// PREVIOUS
// =============

function previousSlide() {

    showSlide(currentSlide - 1);

}

// =============
// AUTO PLAY
// =============

function startSlider() {

    autoSlide = setInterval(() => {

        nextSlide();

    }, 6000);

}

function stopSlider() {

    clearInterval(autoSlide);

}

// =============
// BUTTON EVENTS
// =============

nextBtn.addEventListener("click", () => {

    stopSlider();

    nextSlide();

    startSlider();

});

prevBtn.addEventListener("click", () => {

    stopSlider();

    previousSlide();

    startSlider();

});

// =============
// DOTS
// =============

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        stopSlider();

        showSlide(index);

        startSlider();

    });

});

// =============
// PAUSE ON HOVER
// =============

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", stopSlider);

slider.addEventListener("mouseleave", startSlider);

// =============
// MOBILE SWIPE
// =============

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

slider.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    if (touchEndX < touchStartX - 50) {

        stopSlider();

        nextSlide();

        startSlider();

    }

    if (touchEndX > touchStartX + 50) {

        stopSlider();

        previousSlide();

        startSlider();

    }

});

// =======
// START
// =======
showSlide(0);

startSlider();



// ==============
// FOLLOW BUTTON
// ==============

const followBtn = document.getElementById('followBtn');
const followCard = document.getElementById('followCard');

followBtn.addEventListener('click', () => {
    followCard.classList.toggle('show');
    followBtn.classList.toggle('active'); 
});