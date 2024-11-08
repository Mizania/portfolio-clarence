// Initialize Masonry grid after page load
$(document).ready(function() {
    var $gallery = $('#gallery').imagesLoaded(function() {
        $gallery.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true
        });
    });
});

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Open modal (you can add more specific modal control if needed)
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}