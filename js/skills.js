document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".progress");

    // Function to start the progress bar animation
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute("data-width");
                bar.style.width = width; // Set width to the percentage
                observer.unobserve(bar); // Stop observing once animated
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(animateSkills, {
        threshold: 0.5 // Trigger animation when 50% of the skills section is visible
    });

    // Observe each skill bar for animation
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});
