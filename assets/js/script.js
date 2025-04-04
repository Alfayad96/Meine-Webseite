<script src="assets/js/script.js" defer></script>

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".services, .team, .contact");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    elements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
    });

    // GSAP-Animationen
    gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".services", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from(".team", { duration: 1, x: 100, opacity: 0, delay: 1 });
    gsap.from(".contact", { duration: 1, y: 100, opacity: 0, delay: 1.5 });
});