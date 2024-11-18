/**
 * Manages theme switching functionality for the website
 * Toggles between light and dark themes
 * Persists theme preference in localStorage
 */

// Initialize theme from localStorage or default to light
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleButton(savedTheme);
});

// Theme toggle button functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('clik', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleButton(newTheme);
});

/**
 * Updates the theme toggle button icon based on current theme
 * @param {string} theme - The current theme ('light' or 'dark')
 */
function updateThemeToggleButton(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
} 