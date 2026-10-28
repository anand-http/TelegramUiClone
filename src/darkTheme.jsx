export const toggleDarkMode = () => {
  const htmlElement = document.documentElement;
  const overlay = document.createElement('div');
  overlay.className = 'gradient-overlay';
  document.body.appendChild(overlay);

  setTimeout(() => {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', '');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    document.body.removeChild(overlay);
  }, 500); // Match this duration with the CSS animation duration
};

export const applySavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  }
};
