// Theme Toggle
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;
const logo = document.getElementById('m-shape');

// Toggle Light/Dark Mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Dynamic Logo Based on Time of Day
function updateLogoColor() {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        // Morning - Yellow
        logo.style.fill = '#FFEB3B';
    } else if (currentHour >= 12 && currentHour < 18) {
        // Afternoon - Blue
        logo.style.fill = '#03A9F4';
    } else {
        // Night - Dark Purple
        logo.style.fill = '#673AB7';
    }
}

updateLogoColor();