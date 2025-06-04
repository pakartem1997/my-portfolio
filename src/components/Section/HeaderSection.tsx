import { FC, ReactNode } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router";
import { Button, Stack } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

export interface HeaderSectionProps {
  className?: string;
  backButton?: boolean;
  borderTitle?: boolean;
  children?: ReactNode;
}

export const HeaderSection: FC<HeaderSectionProps> = ({
  className,
  backButton = false,
  borderTitle = false,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Stack
      className={clsx(className, {
        "border-bottom border-2 pb-1": borderTitle,
      })}
      direction="horizontal"
      as="header"
    >
      {backButton && (
        <Button
          onClick={() => {
            navigate(-1);
          }}
          className="rounded-circle me-2 p-2 d-flex justify-content-center align-items-center"
          variant="outline-secondary"
        >
          <FaArrowLeft />
        </Button>
      )}
      {children}
    </Stack>
  );
};
