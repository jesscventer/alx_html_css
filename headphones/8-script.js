/**
 * @file 8-script.js
 * @brief This file contains the JavaScript logic for the hamburger menu.
 * It toggles the mobile navigation menu and animates the hamburger icon
 * when clicked.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const menuToggleCheckbox = document.getElementById('menu-toggle');
    const hamburgerMenuIcon = document.querySelector('.hamburger-menu'); // The label acting as the icon
    const mainNavigation = document.getElementById('main-navigation'); // The <nav> element

    // Ensure all necessary elements exist before proceeding
    if (menuToggleCheckbox && hamburgerMenuIcon && mainNavigation) {
        /**
         * @brief Toggles the visibility of the mobile navigation menu
         * and the animation of the hamburger icon.
         */
        hamburgerMenuIcon.addEventListener('click', () => {
            // Toggle the 'menu-open' class on the navigation menu
            // This class controls the display and slide-in/out animation via CSS
            mainNavigation.classList.toggle('menu-open');

            // Toggle the 'is-active' class on the hamburger menu icon
            // This class controls the 'X' animation via CSS
            hamburgerMenuIcon.classList.toggle('is-active');

            // Update ARIA attributes for accessibility
            const isExpanded = mainNavigation.classList.contains('menu-open');
            menuToggleCheckbox.setAttribute('aria-expanded', isExpanded);
        });

        /**
         * @brief Closes the mobile navigation menu when a navigation link is clicked.
         * This is useful for single-page applications where clicking a link
         * should typically close the menu after navigating to a section.
         */
        const navLinks = mainNavigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove the 'menu-open' class to hide the navigation menu
                mainNavigation.classList.remove('menu-open');
                // Remove the 'is-active' class to reset the hamburger icon animation
                hamburgerMenuIcon.classList.remove('is-active');
                // Uncheck the hidden checkbox to reset its internal state (good practice)
                menuToggleCheckbox.checked = false;
                // Update ARIA attributes
                menuToggleCheckbox.setAttribute('aria-expanded', 'false');
            });
        });
    } else {
        // Log an error if elements are not found, helpful for debugging
        console.error('Hamburger menu elements not found. Check IDs and classes.');
        if (!menuToggleCheckbox) console.error('Element with ID "menu-toggle" not found.');
        if (!hamburgerMenuIcon) console.error('Element with class "hamburger-menu" not found.');
        if (!mainNavigation) console.error('Element with ID "main-navigation" not found.');
    }
});
