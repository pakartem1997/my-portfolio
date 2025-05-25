import { ReactNode, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsCircleHalf, BsMoonStarsFill, BsSunFill } from "react-icons/bs";

type ThemeOptions = "light" | "dark" | "system";

const getIconByTheme = (theme: ThemeOptions): ReactNode | null => {
  if (theme === "light") {
    return <BsSunFill />;
  }

  if (theme === "dark") {
    return <BsMoonStarsFill />;
  }

  if (theme === "system") {
    return <BsCircleHalf />;
  }

  return null;
};

export const DropdownTheme = () => {
  const [theme, setTheme] = useState<ThemeOptions>(() => {
    const theme = window.sessionStorage.getItem("theme") || "light";
    return theme as ThemeOptions;
  });

  useEffect(() => {
    const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (selectedTheme: ThemeOptions) => {
      if (selectedTheme === "system") {
        const isDark = themeMediaQuery.matches;
        document.documentElement.setAttribute(
          "data-bs-theme",
          isDark ? "dark" : "light"
        );
      } else {
        document.documentElement.setAttribute("data-bs-theme", selectedTheme);
      }
    };

    applyTheme(theme);

    if (theme === "system") {
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.setAttribute(
          "data-bs-theme",
          e.matches ? "dark" : "light"
        );
      };
      themeMediaQuery.addEventListener("change", handleChange);
      return () => {
        themeMediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [theme]);

  const handleSwitchTheme = (selectedTheme: ThemeOptions) => {
    setTheme(selectedTheme);
    window.sessionStorage.setItem("theme", selectedTheme);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary">{getIconByTheme(theme)}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSwitchTheme("light")}>
          <BsSunFill /> Светлая
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSwitchTheme("dark")}>
          <BsMoonStarsFill /> Темная
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSwitchTheme("system")}>
          <BsCircleHalf /> Как в системе
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
