import './drop-down-menu.css';
import dotSVG from './dropdown-menu.svg';

export function initDropdownMenu(element) {
    const dropdown = document.createElement('div');
    const dropdownButton = document.createElement('button');
    const dropdownIcon = document.createElement('img');
    const dropdownList = document.createElement('ul');
    const dropdownItem1 = document.createElement('li');
    const dropdownItem2 = document.createElement('li');
    element.appendChild(dropdown);
    dropdown.appendChild(dropdownButton);
    dropdownButton.appendChild(dropdownIcon);
    dropdown.appendChild(dropdownList);
    dropdownList.appendChild(dropdownItem1);
    dropdownList.appendChild(dropdownItem2);
    dropdown.classList.add('dropdown');
    dropdownButton.classList.add('dropdown-button');
    dropdownIcon.classList.add('dropdown-icon');
    dropdownList.classList.add('dropdown-list');
    dropdownItem1.classList.add('dropdown-item');
    dropdownItem2.classList.add('dropdown-item');
    dropdownIcon.src = dotSVG;
    dropdownIcon.alt = "drop down menu";
    dropdownItem1.textContent = 'Rename';
    dropdownItem2.textContent = 'Delete';

    // Toggle dropdown visibility
    dropdownButton.addEventListener('click', function() {
        dropdownList.classList.toggle('visible');
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            if (dropdownList.classList.contains('visible')) {
                dropdownList.classList.remove('visible');
            }
        }
    });
}

// Testing
document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    initDropdownMenu(body);
});