import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

export const LanguageDropdown = () => {
  const [language, setLanguage] = useState<"RU" | "EN">("RU");

  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary">{language}</Dropdown.Toggle>
      <Dropdown.Menu onClick={(e) => console.log(e.target)}>
        <Dropdown.Item as="button" onClick={() => setLanguage("RU")}>
          RU
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => setLanguage("EN")}>
          EN
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
