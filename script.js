// Global variables
let currentPage = 'welcome';
let currentZoom = 100;
const zoomStep = 25;
const minZoom = 50;
const maxZoom = 300;

// DOM elements
const pages = {
    welcome: document.getElementById('welcome-page'),
    nav: document.getElementById('nav-wheel'),
    resume: document.getElementById('resume-page'),
    experience: document.getElementById('experience-page'),
    github: document.getElementById('github-page'),
    linkedin: document.getElementById('linkedin-page'),
    contact: document.getElementById('contact-page')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    setupEventListeners();
    startTypingEffect();
});

function initializeApp() {
    console.log('Initializing app...');
    // Set initial page
    showPage('welcome');
    
    // Initialize resume zoom
    initializeResumeZoom();
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Enter button
    const enterBtn = document.getElementById('enter-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            console.log('Enter button clicked');
            showPage('nav');
        });
    }

    // Close wheel button
    const closeWheelBtn = document.getElementById('close-wheel');
    if (closeWheelBtn) {
        closeWheelBtn.addEventListener('click', () => {
            console.log('Close wheel button clicked');
            showPage('welcome');
        });
    }

    // Wheel segments
    const wheelSegments = document.querySelectorAll('.wheel-segment');
    wheelSegments.forEach(segment => {
        segment.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetPage = segment.getAttribute('data-page');
            console.log('Wheel segment clicked:', targetPage);
            showPage(targetPage);
        });
    });

    // Back buttons
    const backBtns = document.querySelectorAll('.back-btn');
    backBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetPage = btn.getAttribute('data-back');
            console.log('Back button clicked:', targetPage);
            showPage(targetPage);
        });
    });

    // Resume zoom controls
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const resetZoomBtn = document.getElementById('reset-zoom');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', zoomIn);
    }
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', zoomOut);
    }
    if (resetZoomBtn) {
        resetZoomBtn.addEventListener('click', resetZoom);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

function showPage(pageName) {
    console.log('Showing page:', pageName);
    
    // Hide all pages first
    Object.values(pages).forEach(page => {
        if (page) {
            page.classList.remove('active');
            page.classList.remove('slide-out');
        }
    });

    // Show target page
    const targetPage = pages[pageName];
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        console.log('Page shown:', pageName);
    }
}

function startTypingEffect() {
    const texts = [
        "AI & Data Science Enthusiast",
        "Machine Learning Developer",
        "Problem Solver",
        "Tech Innovator"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    const typingElement = document.getElementById('typing-cursor');
    const typingContainer = document.querySelector('.typing-text');
    
    if (!typingElement || !typingContainer) {
        console.log('Typing elements not found');
        return;
    }
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deleting text
            typingContainer.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typingContainer.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Add cursor
        typingContainer.appendChild(typingElement);
        
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of typing
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500; // Pause before starting next text
        }
        
        setTimeout(typeText, speed);
    }
    
    // Start typing effect after a delay
    setTimeout(typeText, 1000);
}

function initializeResumeZoom() {
    const resumeMain = document.querySelector('.resume-main');
    if (resumeMain) {
        // Set initial zoom
        updateResumeZoom();
        
        // Add scroll event listener for zoom
        resumeMain.addEventListener('wheel', handleResumeScroll);
    }
}

function handleResumeScroll(e) {
    if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    }
}

function zoomIn() {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        updateResumeZoom();
    }
}

function zoomOut() {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        updateResumeZoom();
    }
}

function resetZoom() {
    currentZoom = 100;
    updateResumeZoom();
}

function updateResumeZoom() {
    const resumeMain = document.querySelector('.resume-main');
    const zoomLevel = document.querySelector('.zoom-level');
    
    if (resumeMain) {
        resumeMain.style.transform = `scale(${currentZoom / 100})`;
        resumeMain.style.transformOrigin = 'top left';
    }
    
    if (zoomLevel) {
        zoomLevel.textContent = `${currentZoom}%`;
    }
}

function handleKeyboardShortcuts(e) {
    // Escape key to go back
    if (e.key === 'Escape') {
        if (currentPage === 'nav') {
            showPage('welcome');
        } else if (currentPage !== 'welcome') {
            showPage('nav');
        }
    }
    
    // Resume zoom shortcuts
    if (currentPage === 'resume') {
        if (e.ctrlKey && e.key === '=') {
            e.preventDefault();
            zoomIn();
        } else if (e.ctrlKey && e.key === '-') {
            e.preventDefault();
            zoomOut();
        } else if (e.ctrlKey && e.key === '0') {
            e.preventDefault();
            resetZoom();
        }
    }
}
function setInitialWheelPositions(radius = -190) {
    const wheelSegments = document.querySelectorAll('.wheel-segment');

    wheelSegments.forEach(segment => {
        const rotation = segment.style.getPropertyValue('--rotation');
        segment.style.transform = `translate(-50%, -50%) rotate(${rotation}) translateY(${radius}px) scale(1)`;
    });
}



// Add simple hover effects for wheel segments
function addWheelHoverEffects() {
    const wheelSegments = document.querySelectorAll('.wheel-segment');
    setInitialWheelPositions
    wheelSegments.forEach(segment => {
        segment.addEventListener('mouseenter', () => {
            segment.style.transform = `translate(-10%, -10%) rotate(${segment.style.getPropertyValue('--rotation')}) translateY(-190px) scale(1.1)`;
        });
        
        segment.addEventListener('mouseleave', () => {
            segment.style.transform = `translate(-10%, -10%) rotate(${segment.style.getPropertyValue('--rotation')}) translateY(-190px) scale(1)`;
        });
    });
}

// Add particle effect for welcome page
function addParticleEffect() {
    const welcomePage = document.getElementById('welcome-page');
    if (welcomePage) {
        // Create floating particles
        for (let i = 0; i < 10; i++) {
            createParticle(welcomePage);
        }
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(0, 123, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s infinite linear;
    `;
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    container.appendChild(particle);
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Adding additional features...');
    setInitialWheelPositions(); 
    addWheelHoverEffects();
    addParticleEffect();
});

// Add responsive behavior
function addResponsiveBehavior() {
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        
        // Adjust wheel size for mobile
        const wheelContainer = document.querySelector('.wheel-container');
        if (wheelContainer) {
            if (isMobile) {
                wheelContainer.style.width = '600px';
                wheelContainer.style.height = '600px';
            } else {
                wheelContainer.style.width = '900px';
                wheelContainer.style.height = '900px';
            }
        }
        
        // Adjust resume layout for mobile
        const resumeLayout = document.querySelector('.resume-layout');
        if (resumeLayout && isMobile) {
            resumeLayout.style.gridTemplateColumns = '1fr';
            resumeLayout.style.gridTemplateRows = 'auto 1fr auto';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
}

// Initialize responsive behavior
document.addEventListener('DOMContentLoaded', function() {
    addResponsiveBehavior();
});

// Add loading screen
function addLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loadingScreen.innerHTML = `
        <div style="text-align: center;">
            <div style="width: 50px; height: 50px; border: 3px solid #007bff; border-top: 3px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <p style="color: #007bff; font-family: 'Orbitron', monospace;">Loading Portfolio...</p>
        </div>
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

// Add spin animation for loading
const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinStyle);

// Initialize loading screen
document.addEventListener('DOMContentLoaded', function() {
    addLoadingScreen();
}); 