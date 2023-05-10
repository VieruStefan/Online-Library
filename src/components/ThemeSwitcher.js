import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

function ThemeSwitcher() {
  const [themes, setThemes] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      //setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
      const nav = document.querySelector(".navbar");
      if (nav) {
        nav.classList.toggle("navbar-dark", storedTheme === "dark");
      }
    }
  }, []);

  const handleThemeChange = (index) => {
    const selectedTheme = themes[index];
    const t = [
      ["--text-color", selectedTheme[0]],
      ["--bg-color", selectedTheme[1]],
      ["--nav-bg-color", selectedTheme[2]],
      ["--book-1", selectedTheme[3]],
      ["--book-2", selectedTheme[4]]
    ];
    localStorage.setItem("theme", t);

    t.forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    let temp = [];
    reader.onload = () => {
      const contents = reader.result;
      console.log(contents);
      contents.split("\n").forEach((line, index) => {
        temp.push(line);
        if ((index + 1) % 5 === 0) {
          themes.push(temp);
          temp = [];
        }
      });
      setFileUploaded(true);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {fileUploaded && (
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>

          <Dropdown.Menu>
            {themes.map((theme, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleThemeChange(index)}
              >
                Theme {index + 1}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}

export default ThemeSwitcher;
export function getCurrentTheme() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme;
}
