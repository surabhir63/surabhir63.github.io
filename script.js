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
    <p>Developed an interactive Unity game that transforms the office into a collaborative, safety-focused digital playground. Built during HackZurich 2022, the project aimed to promote workplace safety through immersive gameplay. The system features:</p>
    <ul>
        <li>Character navigation and movement through a 2D office environment</li>
        <li>Proximity-based task activation and real-time hazard detection</li>
        <li>Dynamic visibility toggling to simulate emergency scenarios like fires or blocked exits</li>
        <li>Task list tracking and progress feedback for user engagement</li>
        <li>Co-op mini games like tic-tac-toe to promote collaboration and friendly competition</li>
    </ul>
    <p>Selected as Top:15 place in the Workplace Innovation category for Merkle </strong> at HackZurich 2022 for creatively reimagining the modern office environment through gamification and real-time interaction.</p>
    <p><strong>Technologies:</strong> Unity, C#, ShaderLab, HLSL, Git, Visual Studio</p>
</div>`
,

    `<div class="project-details">
    <h4>Computer Vision Target Detection</h4>
    <p>Designed a statistical analysis framework to evaluate and enhance a machine vision system’s ability to detect targets in noisy environments. The project focused on improving classification of "target present" vs. "target absent" data using signal modeling and performance analysis techniques. Key contributions include:</p>
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
  <h4>From Gyroscope-Controlled Arduino Car to Smart Vehicle Integration</h4>
  <p>This two-part project progression highlights my growth in embedded systems and real-time control, from a gesture-driven RC car in my first year to a fully integrated smart car test-bed in junior year.</p>

  <h5> Freshman Design </h5>
  <ul>
    <li>Created a gyroscope-controlled glove that interprets hand gestures to steer, accelerate, or stop an RC vehicle</li>
    <li>Functional prototype where forward tilt accelerates, backward tilt stops, and lateral tilt turns the car</li>
    <li>Designed a 3D-printed RC car with servo steering and Arduino control logic</li>
    <li>Used accelerometer data to execute real-time motion commands with measured ~0.2s response time</li>
  </ul>

  <h5> Junior Year - Continuation </h5>
  <ul>
    <li>Built a microcontroller-based EV prototype with real-time collision avoidance, remote control and adaptive speed control using ultrasonic sensor and PWM-based motor logic</li>
    <li>Developed a MATLAB GUI dashboard displaying live sensor data (distance, temperature, motor speed)</li>
    <li>Integrated RFID authentication, IR remote input, and warning systems based on threshold triggers</li>
    <li>Streamed real-time sensor data from Arduino to MATLAB via serial communication to enable live dashboard visualization and analysis</li>
  </ul>

  <p><strong>Technologies:</strong> Arduino-microcontroller, C++, Accelerometer, Ultrasonic Sensor, IR Remote, RFID authentication, MATLAB GUI, PlatformIO </p>
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


