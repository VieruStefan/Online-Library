import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');
  const [fileContent, setFileContent] = useState("");
  useEffect(() => {
    async function getFileContent() {
      const response = await fetch("https://github.com/VieruStefan/ioc/blob/frontend/src/components/Input.txt");
      const text = await response.text();
      setFileContent(text);
    }

    getFileContent();
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.classList.toggle('navbar-dark', storedTheme === 'dark');
      }
    }
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    const nav = document.querySelector('.navbar');
    if (nav) {
      nav.classList.toggle('navbar-dark', newTheme === 'dark');
      nav.classList.toggle('bg-dark', newTheme === 'dark');
    }
  };

  return (
      <div >
        <div>{fileContent}</div>;
        <input
          type="checkbox"
          id="themeSwitch"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        <label htmlFor="themeSwitch">Dark theme</label>
      </div>
  );
}

export default ThemeSwitcher;
export function getCurrentTheme() {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme || 'light';
}