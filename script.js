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


  // Project 1 (senior design)
        `<div class="project-details">
    <h4>AI-Based 6G Reconfigurable Intelligent Surfaces – Senior Design</h4>
    <p>This senior design project focuses on using AI to dynamically control Reconfigurable Intelligent Surfaces (RIS) for next-generation wireless communication. RIS are smart surfaces made of tiny antennas that can be adjusted to reflect wireless signals in useful directions to improve coverage. Our work was primarily simulation-based, using ray-tracing and AI to test how RIS can reduce dead zones and boost signal strength. As the Machine Learning Engineer on the team, I led the development of a reinforcement learning system that optimizes RIS configuration to enhance signal power and mitigate wireless dead zones in complex indoor environments.</p>
    <ul>
    <li>Generated simulation data and automated experiments using Python scripts in Wireless InSite across a range of RIS angles (−170° to 170°) and receiver coordinates</li>
    <li>Built and trained a Deep Q-Network (DQN) reinforcement learning model to predict the optimal reflection angle based on receiver location and signal feedback</li>
    <li>Designed a custom reward function and implemented state encoding and policy exploration strategies. The agent receives rewards or penalties based on how well the chosen angle improves received signal power; the reward function is directly based on power levels</li>
    <li>Achieved strong model performance (MAE: 5.3°, R²: 0.979), outperforming baseline models such as Random Forest and K-Nearest Neighbors</li>
    <li>Deployed the model on a Google Coral Edge TPU for efficient, real-time inference in a low-power edge environment</li>
    <li>Currently working on deploying the trained model into the DragonRadio SDR setup to evaluate real-time RIS configuration impact on channel quality and signal performance</li>
</ul>
<p>This project was supported by the National Science Foundation and conducted in partnership with Drexel Wireless Systems Laboratory (DWSL). It combines AI, embedded systems, and radio-frequency engineering into a scalable prototype for smart indoor connectivity in 6G networks.</p>
<br>
<p><strong>Technologies:</strong> Python; Data Processing & Analysis (NumPy, Pandas, Matplotlib, Seaborn, Shutil); Machine Learning (PyTorch, Stable-Baselines3, Scikit-learn, KNN); Reinforcement Learning (Deep Q-Network); Wireless InSite; Google Coral TPU; DragonRadio SDR.</p>
</div>`,

        
  // Project 2 (HackZurich) - keep description
    `<div class="project-details">
    <h4>Office Playground – HackZurich 2022</h4>
    <p>Developed an interactive Unity game that transforms the office into a collaborative, safety-focused digital playground. Built during HackZurich 2022, the project aimed to promote workplace safety through immersive gameplay. The system features:</p>
    <p></p>
    <ul>
        <li>Character navigation and movement through a 2D office environment</li>
        <li>Proximity-based task activation and real-time hazard detection</li>
        <li>Dynamic visibility toggling to simulate emergency scenarios like fires or blocked exits</li>
        <li>Task list tracking and progress feedback for user engagement</li>
        <li>Co-op mini games like tic-tac-toe to promote collaboration and friendly competition</li>
    </ul>
    <p>Selected as second place in the Workplace Innovation category for Merkle </strong> and Top 15 overall at HackZurich 2022.</p>
    <br>
    <p><strong>Technologies:</strong> Unity, C#, ShaderLab, HLSL, Git, Visual Studio</p>
</div>`,

        
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
                       
        
`<div class="project-details">
  <h4>From Gyroscope-Controlled Arduino Car to Smart Vehicle Integration</h4>
   <p>This two-part project progression highlights my growth in embedded systems and real-time control, from a gesture-driven RC car in my first year to a fully integrated smart car test-bed in junior year.</p>
   
    
   <ul>
    <li>Created a gyroscope-controlled glove that interprets hand gestures to steer, accelerate, or stop an RC vehicle</li>
    <li>Functional prototype where forward tilt accelerates, backward tilt stops, and lateral tilt turns the car</li>
    <li>Designed a 3D-printed RC car with servo steering and Arduino control logic</li>
    <li>Used accelerometer data to execute real-time motion commands with measured ~0.2s response time</li>
    <li>Tested and calibrated sensor input through live serial monitoring for accurate angle interpretation</li>
   </ul>

  
  <ul>
    <li> Built a full-stack Arduino-based vehicle system in C++, leveraging PlatformIO and Arduino libraries.</li>
    <li> Measured obstacle distance using an HC-SR04 ultrasonic sensor and dynamically controlled motor speed through PWM-based adjustments </li>
    <li> Developed a Built a microcontroller-based EV prototype with real-time collision avoidance, remote control and adaptive speed control using ultrasonic sensor and PWM-based motor logic</li>
    <li>Designed a tiered collision avoidance system that dynamically adjusted motor behavior: maintained full speed at distances >50 cm, reduced speed below 35 cm, and triggered a complete stop under 15 cm</li>
    <li>Programmed real-time alert system with buzzer and LEDs that activate based on obstacle proximity thresholds</li>
    <li>Implemented RFID authentication using the MFRC522 module; only authorized cards could start the system</li>
    <li>Streamed real-time sensor data from Arduino to MATLAB via serial communication to enable live dashboard visualization and analysis of sensor data (distance, temperature, motor speed)</li>
  </ul>

  <p><strong>Technologies:</strong> Arduino-microcontroller, C++, Accelerometer, Ultrasonic Sensor, IR Remote, RFID authentication, MATLAB GUI, PlatformIO </p>
</div>`,
        

`<div class="project-details">
   <h4>Lights Out!</h4>
    <p>Puzzle game inspired by the classic “Lights Out” logic game using C. The game challenges users to turn off all the lights on a grid, where toggling one light also toggles its adjacent lights. Key features and contributions include:</p>
      <ul>
        <li>Simulated a 2D grid using a 1D array and arithmetic indexing to track window states and toggle adjacent lights</li>
        <li>Validated player input and updated an ASCII-rendered game board on the terminal in real time</li>
        <li>Used modular programming and pointer arithmetic for efficient state management and debugging</li>
     </ul>
    <p><strong>Technologies:</strong> C, Game Logic</p>
</div>`
];

    // Add click handlers to all Read More buttons
    document.querySelectorAll('.read-more-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const projectCard = btn.closest('.project-card');
            const title = projectCard.querySelector('h3').textContent;
            
            modalTitle.textContent = title;
            modalContent.innerHTML = projectDescriptions[index];

            modalContent.scrollTop = 0;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        });
    });

    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    });

    // Close when clicking outside modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        }
    });
});

// In your modal or script.js
const posterUrl = 'pdf/RIS%20Poster.pdf'; // URL-encoded space

// Or using encodeURIComponent()
const fileName = 'RIS Poster.pdf';
const safeUrl = 'pdf/' + encodeURIComponent(fileName); // becomes "pdf/RIS%20Poster.pdf"


