// Responsive Navbar Toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Simple form validation and feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('form-message');

        if (!name || !email || !message) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill all fields.';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please enter a valid email.';
            return;
        }

        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you for contacting me!';
        this.reset();
    });
}

// Optional: Smooth scroll for internal links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
        }
    });
});

// ...existing JS...

// Gallery Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const closeModalBtn = document.getElementById('closeModalBtn');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-img');
            const title = item.getAttribute('data-title');
            modalImg.src = imgSrc;
            modalImg.alt = title;
            modalTitle.textContent = title;
            modal.classList.add('active');
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        modalImg.src = "";
        modalTitle.textContent = "";
    });

    // Allow closing modal by clicking outside content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = "";
            modalTitle.textContent = "";
        }
    });

    // Optional: ESC key closes modal
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.classList.contains('active')) {
            modal.classList.remove('active');
            modalImg.src = "";
            modalTitle.textContent = "";
        }
    });
});

// ...existing JS...