const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slide.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slide.length) % slide.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
});

let timer = 60 * 60;
let timerElement = document.getElementById('timer');
setInterval(function() {
  if (timer > 0) {
    timer--;
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}, 1000);

document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
});