// portfolio.js

document.addEventListener("DOMContentLoaded", function () {
    // Get filter from URL (if available)
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    
    if (filter) {
        filterProjects(filter);
    }
});

function filterProjects(category) {
    const allProjects = document.querySelectorAll('.project'); 
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Reset active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Filter projects based on category
    allProjects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = project.classList.contains(category) ? 'block' : 'none';
        }
    });

    // Set active class for the clicked button
    const activeButton = document.querySelector(`button[onclick="filterProjects('${category}')"]`);
    if (activeButton) activeButton.classList.add('active');
}
