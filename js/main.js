/**
 * Manages theme switching functionality for the website.
 * Toggles between light and dark themes.
 * Persists theme preference in localStorage.
 */

// Initialize theme from localStorage or default to light
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});

// Theme toggle button functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

/**
 * Sets the theme and call updates the toggle button icon
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggleButton(theme);
}

/**
 * Updates the theme toggle button
 */
function updateThemeToggleButton(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}
