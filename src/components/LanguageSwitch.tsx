import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export const LanguageSwitch = () => {
  const [radioValue, setRadioValue] = useState('1');

  return (
    <ButtonGroup aria-label="Basic example">
     <ToggleButton
            id={`radio-1`}
            type="radio"
            variant='outline-secondary'
            name="radio"
            value="1"
            checked={radioValue === '1'}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            RU
          </ToggleButton>
     <ToggleButton
            id={`radio-2`}
            type="radio"
            variant='outline-secondary'
            name="radio"
            value="2"
            checked={radioValue === '2'}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            EN
          </ToggleButton>
    </ButtonGroup>
  );
};
