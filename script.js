const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;
        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
const contactForm = document.getElementById('contactForm');
const message = document.getElementById('message');
contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    message.textContent = `Thank you ${name}! Your message has been sent successfully.`;
    contactForm.reset();
    setTimeout(() => {
        message.textContent = '';
    }, 4000);
});
const hour = new Date().getHours();
let greeting = '';
if (hour < 12) {
    greeting = 'Good Morning ☀️';
} else if (hour < 18) {
    greeting = 'Good Afternoon 🌤️';
} else {
    greeting = 'Good Evening 🌙';
}
const heroHeading = document.querySelector('.hero-text h1');
heroHeading.innerHTML = `${greeting}, I'm <span>Web Developer</span>`;