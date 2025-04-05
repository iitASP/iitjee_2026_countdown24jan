// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('January 24, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        document.getElementById("daysLeft").innerHTML = "0";
        document.getElementById("hoursLeft").innerHTML = "00";
        document.getElementById("minutesLeft").innerHTML = "00";
        document.getElementById("secondsLeft").innerHTML = "00";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("daysLeft").innerHTML = days;
    document.getElementById("hoursLeft").innerHTML = hours;
    document.getElementById("minutesLeft").innerHTML = minutes;
    document.getElementById("secondsLeft").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

setInterval(() => changeSlide(1), 5000);
changeSlide(0);
