// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if link is pointing to an ID on the page
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrollPosition = window.scrollY;
            const parallaxOffset = scrollPosition * 0.4;
            
            heroSection.style.backgroundPositionY = `-${parallaxOffset}px`;
        }
    });
    
    // Animation for elements on scroll
    const animateElements = function() {
        const elements = document.querySelectorAll('.team-member, .news-item, .partner, .animated-image, .stat-card, .car-overview-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.9) {
                element.classList.add('animated');
            }
        });
    };
    
    // Initial animation check
    animateElements();
    
    // Animate elements on scroll
    window.addEventListener('scroll', animateElements);
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .team-member, .news-item, .partner, .animated-image, .stat-card, .car-overview-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .team-member.animated, .news-item.animated, .partner.animated, .animated-image.animated, .stat-card.animated, .car-overview-content.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .team-member:nth-child(2n), .news-item:nth-child(2n), .partner:nth-child(2n), .stat-card:nth-child(2n) {
            transition-delay: 0.2s;
        }
        
        .team-member:nth-child(3n), .news-item:nth-child(3n), .partner:nth-child(3n), .stat-card:nth-child(3n) {
            transition-delay: 0.4s;
        }
        
        .stat-card:nth-child(4n) {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
}); 