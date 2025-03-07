document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const scrollTop = document.querySelector('.scroll-top');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const counters = document.querySelectorAll('.counter');
    const contactForm = document.getElementById('contactForm');
    
    // Initialize typing animation
    const typingElement = document.querySelector('.typing');
    const typingTexts = ['Game Developer', 'Web Designer', 'Electronics Programmer', 'PC Builder', 'Tech Enthusiast'];
    let typingIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            scrollTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            scrollTop.classList.remove('active');
        }
        
        // Highlight active nav link on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Menu toggle
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Navigation smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            nav.classList.remove('active');
        });
    });
    
    // Scroll to top button
    scrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Project filters
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Toggle active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Counter animation
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 50);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Typing animation function
    function type() {
        const currentText = typingTexts[typingIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % typingTexts.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Apply styles to skill progress bars
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(progress => {
        const width = progress.style.width;
        progress.style.setProperty('--width', width);
    });
    
    // Matrix effect for background
    function createMatrixEffect() {
        const matrixOverlay = document.querySelector('.matrix-overlay');
        const width = window.innerWidth;
        const height = window.innerHeight;
        const density = Math.floor((width * height) / 10000);
        
        for (let i = 0; i < density; i++) {
            const drop = document.createElement('div');
            drop.className = 'matrix-drop';
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDuration = `${Math.random() * 3 + 1}s`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            matrixOverlay.appendChild(drop);
        }
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            setTimeout(() => {
                alert('Message sent successfully!');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                contactForm.reset();
            }, 1500);
        });
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .award-card, .contact-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    // Initialize animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Start animations and effects
    type();
    animateCounters();
    //createMatrixEffect();  // Uncomment to enable matrix effect (might be performance intensive)
    animateOnScroll();
    
    // Set active filter button
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    
    // Initialize skill bar animations
    setTimeout(() => {
        skillProgress.forEach(progress => {
            progress.style.width = progress.parentElement.previousElementSibling.lastElementChild.textContent;
        });
    }, 500);
});

// Add additional CSS animations dynamically
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes matrix-drop {
    0% {
        transform: translateY(-100vh);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
}

.matrix-drop {
    position: absolute;
    top: 0;
    width: 1px;
    height: 1px;
    background-color: var(--primary-color);
    box-shadow: 0 0 10px var(--primary-color);
    animation: matrix-drop linear infinite;
}

.skill-category, .project-card, .award-card, .contact-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.skill-category.animate, .project-card.animate, .award-card.animate, .contact-item.animate {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);