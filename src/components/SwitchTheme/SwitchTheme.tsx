import { useState } from "react";
import styles from "./SwitchTheme.module.scss";

export const SwitchTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const handleSwitchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <div className={styles.toggleSwitch}>
      <label>
        <input type="checkbox" onClick={handleSwitchTheme} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
