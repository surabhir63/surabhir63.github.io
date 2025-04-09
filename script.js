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
        // Project 1
        `<p><strong>Technologies:</strong> Python, TensorFlow, Wireless InSite, Stable-Baselines3</p>
        <p>Developed an AI-driven RIS system for 6G networks that optimizes signal propagation in real-time using reinforcement learning. The system:</p>
        <ul>
            <li>Improved signal strength by 35% in simulated urban environments</li>
            <li>Reduced power consumption by 22% through dynamic beamforming</li>
            <li>Implemented a custom DQN algorithm for environment adaptation</li>
        </ul>
        <p>This was my senior design capstone project completed over 8 months with a team of 4 engineers.</p>`,
        
        // Project 2
        `<p><strong>Technologies:</strong> Unity, C#, Arduino, Motion Sensors</p>
        <p>Created an immersive office wellness experience for HackZurich 2022 that:</p>
        <ul>
            <li>Transformed physical movements into in-game actions</li>
            <li>Integrated real-time motion tracking with Unity visualization</li>
            <li>Won 2nd place in the workplace innovation category</li>
        </ul>`,
        
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
