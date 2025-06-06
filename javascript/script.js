document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const burgerMenu = document.querySelector('.burger-menu');
    const overlayMenu = document.querySelector('.overlay-menu');
    const closeButton = document.querySelector('.close-button');
    const sideMenuLinks = document.querySelectorAll('.side-menu-link');

    // Toggle dropdown menu for desktop and tablet
    menuButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Keep dropdown menu open when clicked
    dropdownMenu.addEventListener('mouseenter', function () {
        dropdownMenu.classList.add('show');
    });

    dropdownMenu.addEventListener('mouseleave', function () {
        dropdownMenu.classList.remove('show');
    });

    // Toggle overlay menu for mobile
    burgerMenu.addEventListener('click', function () {
        overlayMenu.classList.toggle('show');
    });

    closeButton.addEventListener('click', function () {
        overlayMenu.classList.remove('show');
    });

    // Ensure side menu links open in the same tab
    sideMenuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior
            window.location.href = link.getAttribute('href'); // Open link in the same tab
        });
    });
});
