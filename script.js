// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update active link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Add active class to current section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});



// Read More Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal-overlay');
    const modalContent = document.querySelector('.modal-content');
    const modalTitle = document.querySelector('.modal-title');
    
    // Project descriptions data (match with your project order)
    const projectDescriptions = [
        
  // Project 2 (HackZurich) - keep description
    `<div class="project-details">
        <h4>Office Playground Project</h4>
        <p>Created an immersive office wellness experience for HackZurich 2022 that:</p>
        <ul>
            <li>Transformed physical movements into in-game actions</li>
            <li>Integrated real-time motion tracking with Unity visualization</li>
            <li>Won 2nd place in the workplace innovation category</li>
        </ul>
        <p><strong>Technologies:</strong> Unity, C#, Arduino, Motion Sensors</p>
    </div>`,
        
        // Add descriptions for other projects in the same order
    ];

    // Add click handlers to all Read More buttons
    document.querySelectorAll('.read-more-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const projectCard = btn.closest('.project-card');
            const title = projectCard.querySelector('h3').textContent;
            
            modalTitle.textContent = title;
            modalContent.innerHTML = projectDescriptions[index];
            modal.classList.add('active');
        });
    });

    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close when clicking outside modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// In your modal or script.js
const posterUrl = 'pdf/RIS%20Poster.pdf'; // URL-encoded space

// Or using encodeURIComponent()
const fileName = 'RIS Poster.pdf';
const safeUrl = 'pdf/' + encodeURIComponent(fileName); // becomes "pdf/RIS%20Poster.pdf"


const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('showing');
});

