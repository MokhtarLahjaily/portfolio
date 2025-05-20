document.addEventListener("DOMContentLoaded", function() {
    // Navigation active state
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar ul li a");
    
    window.addEventListener("scroll", function() {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector("#navbar");
    
    menuBtn.addEventListener("click", function() {
        this.classList.toggle("active");
        navbar.classList.toggle("active");
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            menuBtn.classList.remove("active");
            navbar.classList.remove("active");
        });
    });
    
    // Header background on scroll
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
            header.style.background = "#fff";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "transparent";
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simulation d'envoi de formulaire (à remplacer par votre logique d'envoi)
            console.log("Formulaire soumis avec les données:", formValues);
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Afficher un message de succès (à personnaliser selon vos besoins)
            alert("Votre message a été envoyé avec succès. Je vous répondrai dès que possible.");
        });
    }
    
    // Scroll reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 200
    });
    
    sr.reveal('.section-title', {});
    sr.reveal('.about-img', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right' });
    sr.reveal('.skill-category', { interval: 100 });
    sr.reveal('.resume-column', { interval: 200 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right' });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('#navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});