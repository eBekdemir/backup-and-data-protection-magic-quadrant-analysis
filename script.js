document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#navbar .nav-links a');

    // Function to update active nav link
    const updateActiveLink = () => {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
             navLinks[index].classList.add('active');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial call to set active link on page load
    updateActiveLink();

    // Smooth scrolling for anchor links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
