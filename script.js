// JavaScript to toggle light/dark mode and change the logo dynamically

const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
const logoContainer = document.getElementById('logo-container');

// Function to toggle dark mode
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Function to change the logo based on time
function changeLogoByTime() {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        // Morning: Light yellow
        logoContainer.style.backgroundColor = '#FFEB3B';
    } else if (currentHour >= 12 && currentHour < 18) {
        // Afternoon: Light blue
        logoContainer.style.backgroundColor = '#03A9F4';
    } else {
        // Evening/Night: Dark blue
        logoContainer.style.backgroundColor = '#3F51B5';
    }
}

// Initial call to set the logo color
changeLogoByTime();