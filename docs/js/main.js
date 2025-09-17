

// js/main.js
// Enhance smooth scrolling for anchor links
console.log("SyncShield Website Loaded");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align to the top of the target section
            });
        }
    });
});

// Optional: Add active class to navigation links based on scroll position
// This requires a bit more complex logic, but can be added later if needed.