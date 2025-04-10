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
    <h4>Office Playground – HackZurich 2022</h4>
    <p>Developed an interactive Unity game that transforms the office into a collaborative, safety-focused digital playground. Built during HackZurich 2022, the project aimed to promote workplace well-being and spatial awareness through immersive gameplay. The system features:</p>
    <ul>
        <li>Character navigation and movement through a 3D office environment</li>
        <li>Proximity-based task activation and real-time hazard detection</li>
        <li>Dynamic visibility toggling to simulate emergency scenarios like fires or blocked exits</li>
        <li>Task list tracking and progress feedback for user engagement</li>
        <li>Co-op mini games to promote collaboration and friendly competition</li>
        <li>Teleportation portals, interactive perks, and gamified office challenges</li>
    </ul>
    <p>Won <strong>2nd place in the Workplace Innovation category</strong> at HackZurich 2022 for creatively reimagining the modern office environment through gamification and real-time interaction.</p>
    <p><strong>Technologies:</strong> Unity, C#, ShaderLab, HLSL, Git, Visual Studio</p>
</div>`
,

    `<div class="project-details">
    <h4>Computer Vision Target Detection</h4>
    <p>Designed a statistical analysis framework to evaluate and enhance a machine vision system’s ability to detect targets in noisy environments. The project focused on improving binary classification of "target present" vs. "target absent" data using signal modeling and performance analysis techniques. Key contributions include:</p>
    <ul>
        <li>Conducted ROC analysis to find the optimal detection threshold and quantify system performance using AUC</li>
        <li>Modeled data distributions using hypothesis testing and identified Gamma (target absent) and Rician (target present) as best fits via χ² tests</li>
        <li>Applied both parametric and non-parametric bootstrapping to validate statistical robustness and estimate confidence intervals</li>
        <li>Enhanced system accuracy using signal processing techniques such as arithmetic mean, geometric mean, and max-value filtering</li>
        <li>Achieved performance improvement from baseline AUC of 0.906 to 0.985, with error rate reduced from 21/130 to 7/130 and PPV increased to 0.934</li>
    </ul>
    <p><strong>Technologies:</strong> MATLAB, Statistical Analysis: ROC Analysis, Bootstrapping, Hypothesis Testing, Probability Density Functions(Nakagami, Rician, Gamma, Lognormal, Weibull), Bayes Rule, Signal Processing</p>
</div>`,

                         ` <div class="project-details">
    <h4>Computer Vision Target Detection</h4>
    <p>Designed a statistical analysis framework to evaluate and enhance a machine vision system’s ability to detect targets in noisy environments. The project focused on improving binary classification of "target present" vs. "target absent" data using signal modeling and performance analysis techniques. Key contributions include:</p>
    <ul>
        
        <li>Achieved performance improvement from baseline AUC of 0.906 to 0.985, with error rate reduced from 21/130 to 7/130 and PPV increased to 0.934</li>
    </ul>
    <p><strong>Technologies:</strong> MATLAB, Python (NumPy, SciPy, Matplotlib), ROC Analysis, Bootstrapping, Hypothesis Testing, Signal Processing</p>
</div>`,

        
    `<div class="project-details">
    <h4>Arduino Smart Car</h4>
    <p>Built a fully integrated smart car system using Arduino that combines autonomous driving with interactive sensor-based features. The vehicle demonstrates multi-sensor fusion and control through real-time environmental input. Key capabilities include:</p>
    <ul>
        <li>Gyroscope-based motion control using the MPU6050 sensor to direct the car based on tilt and orientation</li>
        <li>Ultrasonic obstacle detection and avoidance using the HC-SR04 sensor</li>
        <li>RFID-based user authentication system using the MFRC522 module</li>
        <li>Real-time temperature and humidity display on an LCD using the DHT11 sensor</li>
        <li>IR remote control for manual movement and LED headlight toggling</li>
        <li>Audible buzzer feedback and system alerts</li>
        <li>Modular code structure using PlatformIO with reusable headers, libraries, and clean logic flow</li>
    </ul>
    <p>Developed as a hands-on embedded systems project to explore hardware integration, real-time control loops, and system modularity using Arduino and C++.</p>
    <p><strong>Technologies:</strong> C++, Arduino Uno, PlatformIO, MPU6050, HC-SR04, MFRC522, DHT11, LCD1602, IR Receiver (AX-1838HS), L298N Motor Driver, LEDs, Buzzer</p>
</div>`

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


