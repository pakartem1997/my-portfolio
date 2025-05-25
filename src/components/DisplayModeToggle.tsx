import { DisplayMode } from "@/enums/DisplayMode";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

interface DisplayModeToggleProps {
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
  className?: string;
}

const ICON_SIZE = 20;

export const DisplayModeToggle: React.FC<DisplayModeToggleProps> = ({
  displayMode,
  setDisplayMode,
  className,
}) => {
  return (
      <ButtonGroup className={className}>
        <Button
          variant="outline-secondary"
          onClick={() => setDisplayMode(DisplayMode.Column)}
          active={displayMode === DisplayMode.Column}
          aria-label="Column view"
        >
          <CiGrid2H size={ICON_SIZE} />
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => setDisplayMode(DisplayMode.Table)}
          active={displayMode === DisplayMode.Table}
          aria-label="Table view"
        >
          <CiGrid41 size={ICON_SIZE} />
        </Button>
      </ButtonGroup>
  );
};

export { DisplayMode };
