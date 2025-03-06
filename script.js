let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", `goToSlide(${index})`);
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
        dots[index].classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlides();
}

// Auto slide
setInterval(nextSlide, 3000);
updateSlides();
