document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownList = document.querySelector('.dropdown-list');

    // Toggle dropdown visibility
    dropdownButton.addEventListener('click', function() {
        dropdownList.classList.toggle('visible');
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button') && !event.target.matches('.dropdown-item')) {
            if (dropdownList.classList.contains('visible')) {
                dropdownList.classList.remove('visible');
            }
        }
    });
});