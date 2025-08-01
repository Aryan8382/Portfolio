
        // Initialize typing animation
        const typed = new Typed('.typing', {
            strings: [
                'Full-Stack Developer',
                'Problem Solver',
                'Creative Thinker'
                
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: ''
        });

        // Accordion functionality
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            section.addEventListener('click', function () {
                // Remove active class from all sections
                sections.forEach(sec => sec.classList.remove('active'));

                // Add active class to clicked section
                this.classList.add('active');
            });
        });

       

        // Keyboard navigation
        document.addEventListener('keydown', function (e) {
            const activeSection = document.querySelector('.section.active');
            const currentIndex = Array.from(sections).indexOf(activeSection);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % sections.length;
                sections[nextIndex].click();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
                sections[prevIndex].click();
            }
        });

        // Animate stats when about section is active
        let statsAnimated = false;
        const aboutSection = document.getElementById('about');
        const statNumbers = aboutSection.querySelectorAll('.stat-number');

        function animateStats() {
            if (statsAnimated) return;

            statNumbers.forEach((stat, index) => {
                const finalValue = parseInt(stat.textContent.replace(/\D/g, ''));
                const suffix = stat.textContent.replace(/\d/g, '');
                let currentValue = 0;
                const increment = finalValue / 50;

                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = finalValue + suffix;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentValue) + suffix;
                    }
                }, 40);
            });

            statsAnimated = true;
        }

        // Check if about section is active
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.target.classList.contains('active') && mutation.target.id === 'about') {
                    setTimeout(animateStats, 500);
                }
            });
        });

        // Observe all sections for class changes
        sections.forEach(section => {
            observer.observe(section, { attributes: true, attributeFilter: ['class'] });
        });

        // Social links hover effects
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-3px) scale(1.1)';
            });

            link.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Smooth scroll for content areas
        const contentAreas = document.querySelectorAll('.content');
        contentAreas.forEach(content => {
            content.addEventListener('scroll', function () {
                const scrolled = this.scrollTop;
                const rate = scrolled * -0.5;

                // Parallax effect for headings
                const heading = this.querySelector('h3, h1');
                if (heading) {
                    heading.style.transform = `translateY(${rate}px)`;
                }
            });
        });

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function () {
            // Add loading animation
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);

            // Initialize first section as active
            const homeSection = document.getElementById('home');
            if (homeSection && !homeSection.classList.contains('active')) {
                homeSection.classList.add('active');
            }
        });

        // Add click sound effect (optional)
        sections.forEach(section => {
            section.addEventListener('click', function () {
                // Create a subtle click feedback
                this.style.transform = 'scale(0.99)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Project cards interaction
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', function () {
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);

                // You can add modal or redirect functionality here
                console.log('Project card clicked:', this.querySelector('h4').textContent);
            });
        });
