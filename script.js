// iFlow Capital Analysis - Navigation & Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll navigation
    initNavigation();

    // Add subtle hover effects
    initHoverEffects();

    console.log('iFlow Capital Analysis loaded');
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function initHoverEffects() {
    // Timeline items
    document.querySelectorAll('.timeline-event').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const marker = this.querySelector('.event-marker');
            if (marker) {
                marker.style.transform = 'scale(1.2)';
            }
        });

        item.addEventListener('mouseleave', function() {
            const marker = this.querySelector('.event-marker');
            if (marker) {
                marker.style.transform = 'scale(1)';
            }
        });
    });

    // Analysis cards
    document.querySelectorAll('.analysis-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Data tables rows
    document.querySelectorAll('.full-table tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.2s ease';
        });
    });
}