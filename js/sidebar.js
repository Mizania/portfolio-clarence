// Function to highlight the active section and scroll to it when clicked
function handleSidebarNavigation() {
    const sidebarItems = document.querySelectorAll('#sidebar li');
    const sections = document.querySelectorAll('section');

    // Add smooth scrolling to each sidebar link
    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetSection = document.getElementById(item.getAttribute('data-target'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Function to highlight the active section as you scroll
    window.addEventListener('scroll', function () {
        let currentSection = null;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = index;
            }
        });

        // Remove active class from all items
        sidebarItems.forEach(item => item.classList.remove('active'));

        // Add active class to the corresponding sidebar item
        if (currentSection !== null) {
            sidebarItems[currentSection].classList.add('active');
        }
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}


// Run the function on page load
document.addEventListener('DOMContentLoaded', handleSidebarNavigation);