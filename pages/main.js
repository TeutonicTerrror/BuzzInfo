document.addEventListener('DOMContentLoaded', () => {

const buzzSound = document.getElementById('buzzSound');

const buzzLogo = document.getElementById('buzzLogo');

if(buzzLogo) {

buzzLogo.addEventListener('click', (e) => {

e.preventDefault();

buzzSound.currentTime = 0;

buzzSound.play();

});

}

const sourceCards = document.querySelectorAll('.source-card');

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add('visible');

}

});

}, { threshold: 0.1 });

document.querySelectorAll('.fact-card').forEach(card => {

observer.observe(card);

});

window.addEventListener('scroll', () => {

const scrolled = window.pageYOffset;

const navbar = document.querySelector('.navbar');

navbar.style.background = scrolled > 100 ? 'rgba(26, 26, 26, 0.98)' : 'var(--section-bg)';

});

document.querySelectorAll('.card-content img').forEach(img => {

img.addEventListener('mousemove', (e) => {

const rect = img.getBoundingClientRect();

const x = (e.clientX - rect.left) / img.offsetWidth - 0.5;

const y = (e.clientY - rect.top) / img.offsetHeight - 0.5;

img.style.transform = `perspective(1000px) rotateX(${y * 6}deg) rotateY(${x * 6}deg) scale(1.05)`;

});

img.addEventListener('mouseleave', () => {

img.style.transform = 'none';

});

});

sourceCards.forEach(card => {

const faviconDomain = card.dataset.favicon;

const img = card.querySelector('.source-favicon');

img.src = `https://www.google.com/s2/favicons?domain_url=${faviconDomain}&sz=64`;

card.addEventListener('click', () => {

window.open(card.dataset.url, '_blank');

});

});

});

