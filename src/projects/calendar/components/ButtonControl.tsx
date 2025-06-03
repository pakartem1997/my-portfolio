import { FC, ReactNode } from "react";
import { Button } from "react-bootstrap";

interface ButtonControlProps {
  children: ReactNode;
  onClick: () => void;
}

export const ButtonControl: FC<ButtonControlProps> = ({
  children,
  onClick,
}) => (
  <Button
    onClick={onClick}
    variant="outline-secondary"
    className="p-2 d-flex justify-content-center align-items-center"
  >
    {children}
  </Button>
);
