// main.js
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconMoon = 'uil-moon';
const iconSun = 'uil-sun';

// Load saved theme (from localStorage)
const saved = localStorage.getItem('theme');
if (saved === 'dark') {
  document.documentElement.classList.add(darkTheme);
  themeButton.classList.replace(iconMoon, iconSun);
}

// Toggle on click
themeButton.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle(darkTheme);
  themeButton.classList.replace(
    isDark ? iconMoon : iconSun,
    isDark ? iconSun : iconMoon
  );
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
