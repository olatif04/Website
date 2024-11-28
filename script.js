// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Find the target section
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll to the section smoothly
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Enables smooth scrolling
                block: 'start' // Scrolls to the top of the target section
            });
        }
    });
});
